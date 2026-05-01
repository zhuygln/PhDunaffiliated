---
layout: default
title: Progress
---

# Progress Log

<div id="contribution-heatmap" class="heatmap-container"></div>

{% assign entries = site.progress | sort: "date" | reverse %}
{% if entries.size > 0 %}
<div class="log-list">
{% for entry in entries %}
  <div class="log-entry">
    <div class="log-date">{{ entry.date | date: "%B %-d, %Y" }}</div>
    <div class="log-body">{{ entry.content }}</div>
  </div>
{% endfor %}
</div>
{% else %}
<p class="empty-state">Nothing here yet.</p>
{% endif %}

<script>
window._progressDates = [{% for entry in site.progress %}"{{ entry.date | date: '%Y-%m-%d' }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
</script>
<script src="/assets/js/heatmap.js"></script>
