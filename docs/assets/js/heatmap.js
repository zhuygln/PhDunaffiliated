(function () {
  var container = document.getElementById('contribution-heatmap');
  if (!container) return;

  var dateSet = new Set(window._progressDates || []);

  var CELL = 12, GAP = 2, WEEKS = 52;
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var DAY_LABEL_W = 30;
  var COLOR_EMPTY  = '#ebedf0';
  var COLOR_ACTIVE = '#2a5a8c';

  // Use noon to sidestep DST midnight boundary issues
  function noon(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0);
  }

  function toStr(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }

  // Parse "YYYY-MM-DD" safely without UTC conversion
  function parseLocalDate(s) {
    var p = s.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0);
  }

  var today    = noon(new Date());
  var todayStr = toStr(today);

  // Start from 52 weeks ago, rounded back to the nearest Sunday
  var start = noon(new Date());
  start.setDate(start.getDate() - WEEKS * 7);
  start.setDate(start.getDate() - start.getDay());

  // Build week columns
  var allWeeks = [];
  var cur = new Date(start);

  while (toStr(cur) <= todayStr) {
    var week = [];
    for (var i = 0; i < 7; i++) {
      var ds = toStr(cur);
      week.push({ date: ds, active: dateSet.has(ds), future: ds > todayStr });
      cur.setDate(cur.getDate() + 1);
    }
    allWeeks.push(week);
  }

  // Month label positions: first week that starts a new month
  var monthLabels = [];
  allWeeks.forEach(function (week, wi) {
    var d = parseLocalDate(week[0].date);
    if (d.getDate() <= 7) {
      monthLabels.push({ wi: wi, label: MONTHS[d.getMonth()] });
    }
  });

  // Build SVG
  var svgNS  = 'http://www.w3.org/2000/svg';
  var svgW   = DAY_LABEL_W + allWeeks.length * (CELL + GAP);
  var svgH   = 20 + 7 * (CELL + GAP);

  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width',  svgW);
  svg.setAttribute('height', svgH);
  svg.style.display = 'block';
  svg.style.fontFamily = 'inherit';

  function text(x, y, content, size) {
    var t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', x);
    t.setAttribute('y', y);
    t.setAttribute('fill', '#999');
    t.setAttribute('font-size', size || '10');
    t.textContent = content;
    return t;
  }

  // Month labels
  monthLabels.forEach(function (ml) {
    svg.appendChild(text(DAY_LABEL_W + ml.wi * (CELL + GAP), 10, ml.label));
  });

  // Day-of-week labels: Mon / Wed / Fri
  [[1, 'Mon'], [3, 'Wed'], [5, 'Fri']].forEach(function (pair) {
    svg.appendChild(text(0, 20 + pair[0] * (CELL + GAP) + CELL, pair[1], '9'));
  });

  // Cells
  allWeeks.forEach(function (week, wi) {
    week.forEach(function (day, di) {
      if (day.future) return;
      var rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x',      DAY_LABEL_W + wi * (CELL + GAP));
      rect.setAttribute('y',      20 + di * (CELL + GAP));
      rect.setAttribute('width',  CELL);
      rect.setAttribute('height', CELL);
      rect.setAttribute('rx',     2);
      rect.setAttribute('fill',   day.active ? COLOR_ACTIVE : COLOR_EMPTY);
      var title = document.createElementNS(svgNS, 'title');
      title.textContent = day.date + (day.active ? ' — 1 entry' : '');
      rect.appendChild(title);
      svg.appendChild(rect);
    });
  });

  container.appendChild(svg);
})();
