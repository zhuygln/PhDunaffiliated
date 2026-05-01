---
layout: default
title: Publications
---

# Publications

{% for paper in site.data.publications %}
<div class="publication">
  <div class="pub-title">{{ paper.title }}</div>
  <div class="pub-authors">{{ paper.authors }}</div>
  <div class="pub-venue"><em>{{ paper.venue }}</em>, {{ paper.year }}</div>
  {% if paper.description %}<div class="pub-description">{{ paper.description }}</div>{% endif %}
  <div class="pub-links">
    {% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank">PDF</a>{% endif %}
    {% if paper.code %}<a href="{{ paper.code }}" target="_blank">Code</a>{% endif %}
    {% if paper.status == "submitted" %}<span class="pub-status">Under review</span>{% endif %}
  </div>
</div>
{% else %}
<p class="empty-state">Nothing published yet.</p>
{% endfor %}
