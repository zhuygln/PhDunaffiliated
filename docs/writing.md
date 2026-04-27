---
layout: default
title: Writing
---

# Writing

{% if site.posts.size > 0 %}
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>
{% else %}
<p class="empty-state">Nothing here yet.</p>
{% endif %}
