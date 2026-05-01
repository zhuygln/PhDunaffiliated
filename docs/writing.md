---
layout: default
title: Writing
---

# Writing

{% if site.posts.size > 0 %}
<ul class="post-list">
{% for post in site.posts %}
  {% assign words = post.content | number_of_words %}
  {% assign reading_time = words | divided_by: 200 %}
  {% if reading_time < 1 %}{% assign reading_time = 1 %}{% endif %}
  <li>
    <div class="post-list-main">
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
    </div>
    <div class="post-list-sub">
      <span class="reading-time">{{ reading_time }} min read</span>
      {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
    </div>
  </li>
{% endfor %}
</ul>
{% else %}
<p class="empty-state">Nothing here yet.</p>
{% endif %}
