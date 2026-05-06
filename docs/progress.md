---
layout: default
title: Progress
---

# Progress Log

<div class="heatmap-container">
<a href="https://github.com/zhuygln" target="_blank" rel="noopener">
<img src="https://ghchart.rshah.org/2a5a8c/zhuygln" alt="zhuygln's GitHub contributions" style="width:100%;max-width:800px;display:block">
</a>
</div>

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
