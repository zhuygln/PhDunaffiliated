(function () {
  var container = document.getElementById('contribution-heatmap');
  if (!container) return;

  var dates = window._progressDates || [];
  var dateSet = {};
  dates.forEach(function (d) { dateSet[d] = true; });

  var CELL = 11, GAP = 3, WEEKS = 52;
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Start from Sunday of the week that was ~52 weeks ago
  var start = new Date(today);
  start.setDate(start.getDate() - WEEKS * 7);
  start.setDate(start.getDate() - start.getDay());

  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  // Build week columns
  var allWeeks = [];
  var cur = new Date(start);
  while (cur <= today) {
    var week = [];
    for (var d = 0; d < 7; d++) {
      var ds = formatDate(cur);
      week.push({ date: ds, count: dateSet[ds] ? 1 : 0, future: cur > today });
      cur.setDate(cur.getDate() + 1);
    }
    allWeeks.push(week);
  }

  // Month label positions: show label on first week that starts a new month
  var monthLabels = [];
  allWeeks.forEach(function (week, wi) {
    var d = new Date(week[0].date);
    if (d.getDate() <= 7) {
      monthLabels.push({ wi: wi, label: months[d.getMonth()] });
    }
  });

  // SVG dimensions
  var DAY_LABEL_W = 28;
  var svgW = DAY_LABEL_W + allWeeks.length * (CELL + GAP);
  var svgH = 20 + 7 * (CELL + GAP);

  var svgNS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', svgW);
  svg.setAttribute('height', svgH);
  svg.style.display = 'block';

  // Month labels
  monthLabels.forEach(function (ml) {
    var t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', DAY_LABEL_W + ml.wi * (CELL + GAP));
    t.setAttribute('y', 10);
    t.setAttribute('fill', '#999');
    t.setAttribute('font-size', '10');
    t.setAttribute('font-family', 'inherit');
    t.textContent = ml.label;
    svg.appendChild(t);
  });

  // Day-of-week labels (Mon / Wed / Fri)
  [['Mon', 1], ['Wed', 3], ['Fri', 5]].forEach(function (pair) {
    var t = document.createElementNS(svgNS, 'text');
    t.setAttribute('x', 0);
    t.setAttribute('y', 20 + pair[1] * (CELL + GAP) + CELL);
    t.setAttribute('fill', '#999');
    t.setAttribute('font-size', '9');
    t.setAttribute('font-family', 'inherit');
    t.textContent = pair[0];
    svg.appendChild(t);
  });

  // Cells
  var COLOR_EMPTY = '#ebedf0';
  var COLOR_ACTIVE = '#2a5a8c';

  allWeeks.forEach(function (week, wi) {
    week.forEach(function (day, di) {
      if (day.future) return;
      var rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('x', DAY_LABEL_W + wi * (CELL + GAP));
      rect.setAttribute('y', 20 + di * (CELL + GAP));
      rect.setAttribute('width', CELL);
      rect.setAttribute('height', CELL);
      rect.setAttribute('rx', 2);
      rect.setAttribute('fill', day.count > 0 ? COLOR_ACTIVE : COLOR_EMPTY);

      var title = document.createElementNS(svgNS, 'title');
      title.textContent = day.count > 0
        ? day.date + ' — 1 entry'
        : day.date;
      rect.appendChild(title);

      svg.appendChild(rect);
    });
  });

  container.appendChild(svg);

  function formatDate(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }
})();
