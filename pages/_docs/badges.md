---
title: Badges
---

### Default markup

{% example html %}
{% for color in site.colors %}
<span class="badge text-white bg-{{ color[0] }}">{{ color[0] }}</span>
{% endfor %}
{% endexample %}

### Pill badges

{% example html %}
{% for color in site.colors %}
<span class="badge badge-pill text-white bg-{{ color[0] }}">{{ forloop.index }}</span>
{% endfor %}
{% endexample %}


### Soft badges

{% example html %}
{% for color in site.colors %}
<span class="badge bg-{{ color[0] }}-lt">{{ color[0] }}</span>
{% endfor %}
{% endexample %}


### Links

{% example html %}
{% for color in site.colors %}
<a href="#" class="badge bg-{{ color[0] }}">{{ color[0] }}</a>
{% endfor %}
{% endexample %}


### Empty badges

{% example html %}
{% for color in site.colors %}
<a href="#" class="badge bg-{{ color[0] }}"></a>
{% endfor %}
{% endexample %}