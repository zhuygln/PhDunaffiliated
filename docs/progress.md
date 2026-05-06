---
layout: default
title: Progress
---

# Progress Log

{%- assign cell = 12 -%}
{%- assign step = 14 -%}
{%- assign label_w = 30 -%}
{%- assign top_pad = 20 -%}
{%- assign start_year = 2026 -%}
{%- assign start_month = 4 -%}
{%- assign start_day = 1 -%}
{%- assign first_date = '2026-04-01' -%}

{%- capture entries_csv -%},{% for entry in site.progress %}{{ entry.date | date: '%Y-%m-%d' }},{% endfor %}{%- endcapture -%}

{%- assign cur_year = site.time | date: '%Y' | plus: 0 -%}
{%- assign cur_month = site.time | date: '%-m' | plus: 0 -%}
{%- assign cur_day = site.time | date: '%-d' | plus: 0 -%}

{%- assign row = first_date | date: '%w' | plus: 0 -%}
{%- assign col = 0 -%}

{%- assign mon_off = step | plus: cell -%}
{%- assign mon_y = top_pad | plus: mon_off -%}
{%- assign wed_off = step | times: 3 | plus: cell -%}
{%- assign wed_y = top_pad | plus: wed_off -%}
{%- assign fri_off = step | times: 5 | plus: cell -%}
{%- assign fri_y = top_pad | plus: fri_off -%}

<div class="heatmap-container">
<svg width="800" height="118" style="display:block;font-family:inherit">
<text x="0" y="{{ mon_y }}" fill="#999" font-size="9">Mon</text>
<text x="0" y="{{ wed_y }}" fill="#999" font-size="9">Wed</text>
<text x="0" y="{{ fri_y }}" fill="#999" font-size="9">Fri</text>
{%- for yr in (start_year..cur_year) -%}
  {%- if yr == start_year %}{% assign m0 = start_month %}{% else %}{% assign m0 = 1 %}{% endif -%}
  {%- if yr == cur_year  %}{% assign m1 = cur_month  %}{% else %}{% assign m1 = 12 %}{% endif -%}
  {%- for m in (m0..m1) -%}
    {%- case m -%}
      {%- when 1,3,5,7,8,10,12 %}{% assign dim = 31 %}
      {%- when 4,6,9,11        %}{% assign dim = 30 %}
      {%- when 2               %}{% assign dim = 28 %}
    {%- endcase -%}
    {%- if yr == start_year and m == start_month %}{% assign d0 = start_day %}{% else %}{% assign d0 = 1 %}{% endif -%}
    {%- assign d1 = dim -%}
    {%- if yr == cur_year and m == cur_month %}{% assign d1 = cur_day %}{% endif -%}
    {%- assign mm_padded = '0' | append: m | slice: -2, 2 -%}
    {%- case m -%}
      {%- when 1 %}{% assign mname = 'Jan' %}
      {%- when 2 %}{% assign mname = 'Feb' %}
      {%- when 3 %}{% assign mname = 'Mar' %}
      {%- when 4 %}{% assign mname = 'Apr' %}
      {%- when 5 %}{% assign mname = 'May' %}
      {%- when 6 %}{% assign mname = 'Jun' %}
      {%- when 7 %}{% assign mname = 'Jul' %}
      {%- when 8 %}{% assign mname = 'Aug' %}
      {%- when 9 %}{% assign mname = 'Sep' %}
      {%- when 10 %}{% assign mname = 'Oct' %}
      {%- when 11 %}{% assign mname = 'Nov' %}
      {%- when 12 %}{% assign mname = 'Dec' %}
    {%- endcase -%}
    {%- for d in (d0..d1) -%}
      {%- assign dd_padded = '0' | append: d | slice: -2, 2 -%}
      {%- assign date_str = yr | append: '-' | append: mm_padded | append: '-' | append: dd_padded -%}
      {%- assign target = ',' | append: date_str | append: ',' -%}
      {%- if entries_csv contains target %}{% assign fill = '#2a5a8c' %}{% else %}{% assign fill = '#ebedf0' %}{% endif -%}
      {%- assign col_off = col | times: step -%}
      {%- assign x_pos = col_off | plus: label_w -%}
      {%- assign row_off = row | times: step -%}
      {%- assign y_pos = row_off | plus: top_pad %}
<rect x="{{ x_pos }}" y="{{ y_pos }}" width="{{ cell }}" height="{{ cell }}" rx="2" fill="{{ fill }}"><title>{{ date_str }}</title></rect>
{%- if d == d0 %}
<text x="{{ x_pos }}" y="14" fill="#999" font-size="10">{{ mname }}</text>
{%- endif -%}
      {%- assign row = row | plus: 1 -%}
      {%- if row > 6 %}{% assign row = 0 %}{% assign col = col | plus: 1 %}{% endif -%}
    {%- endfor -%}
  {%- endfor -%}
{%- endfor %}
</svg>
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
