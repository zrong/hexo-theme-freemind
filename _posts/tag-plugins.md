title: Tag Plugins
date: 2014-03-16 10:17:16
tags: plugins
categories: Docs
description: Introduce tag plugins in freemind.
feature: /images/tag-plugins/plugins.jpg
toc: true
---

The freemind theme offers several new tag plugins, so as to fully take advantages of Bootstrap.

Using them is as easily as you normally do using hexo tag plugins. 

## Buttons ##

Inserts a button with target links, text and specified color.

### Syntax ###

{% raw %}
```
{% btn url text [color] %}
```
{% endraw %}

<!-- more -->

### Examples ###

{% raw %}
```
{% btn http://hahack.com hahack %}

{% btn http://hahack.com hahack blue %}

{% btn http://hahack.com hahack green %}

{% btn http://hahack.com hahack yellow %}

{% btn http://hahack.com hahack red %}

{% btn http://hahack.com hahack black %}
```
{% endraw %}

### Results ###

{% btn http://hahack.com hahack %}

{% btn http://hahack.com hahack blue %}

{% btn http://hahack.com hahack green %}

{% btn http://hahack.com hahack yellow %}

{% btn http://hahack.com hahack red %}

{% btn http://hahack.com hahack black %}

## Label ##

Inserts a label with text and specified color.

### Syntax ###

{% raw %}
```
{% label text [color] %}
```
{% endraw %}

### Examples ###

{% raw %}
```
{% label red red %}

{% label blue blue %}

{% label black black %}
```
{% endraw %}

### Results ###

{% label grey %}

{% label yellow yellow %}

{% label green green %}

{% label red red %}

{% label blue blue %}

{% label black black %}

## Badges ##

Inserts a label with text and specified color.

### Syntax ###

{% raw %}
```
{% badge text [color] %}
```
{% endraw %}

### Examples ###

{% raw %}
```
{% badge grey %}

{% badge yellow yellow %}

{% badge green green %}

{% badge red red %}

{% badge blue blue %}

{% badge black black %}
```
{% endraw %}

### Results ###

{% badge grey %}

{% badge yellow yellow %}

{% badge green green %}

{% badge red red %}

{% badge blue blue %}

{% badge black black %}

## Alerts ##

Inserts a label with text and specified color.

### Syntax ###

{% raw %}
```
{% alert [color] %}
   Alert string
{% endalert %}
```
{% endraw %}

### Examples ###

{% raw %}
```
{% alert yellow %}Best check yo self, you're not looking too good.{% endalert %}

{% alert red %}Change a few things up and try submitting again.{% endalert %}

{% alert green %}You successfully read this important alert message.{% endalert %}

{% alert blue %}This alert needs your attention, but it's not super important.{% endalert %}
```
{% endraw %}

### Results ###

{% alert yellow %}Best check yo self, you're not looking too good.{% endalert %}

{% alert red %}Change a few things up and try submitting again.{% endalert %}

{% alert green %}You successfully read this important alert message.{% endalert %}

{% alert blue %}This alert needs your attention, but it's not super important.{% endalert %}

## Side Notes ##

One interenting feature in Freemind theme is that you can easily insert a margin note at the right side of the page.

{% alert red %}
To avoid breaking the line after inserting side notes/images, it is recommended to disable the `breaks` option of Markdown. Modified your root `_config.yml` file as:

```
# Markdown
## https://github.com/chjj/marked
markdown:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: false	# disable breaks option. Recommended!
  smartLists: true
  smartypants: true
```

{% endalert %}

### Syntax ###

{% raw %}
```
{% sidenote index %}
  Side note text
{% endsidenote %}
```
{% endraw %}

### Example ###

{% raw %}
```
See the right side{% sidenote 1 %}This is a side note.{% endsidenote %}.
```
{% endraw %}

### Result ###

See the right side{% sidenote 1 %}This is a side note.{% endsidenote %}.

## Side Image ##

You can also insert a side image at the right side of the page{% sideimg /images/tag-plugins/plugins.jpg 1 %}This is a side image.{% endsideimg %}. 

### Syntax ###

{% raw %}
```
{% sideimg url [index] %}
  Side image text
{% endsideimg %}
```
{% endraw %}

### Example ###

{% raw %}
```
{% sideimg /images/tag-plugins/plugins.jpg 1 %}
This is a side image.
{% endsideimg %}
```
{% endraw %}

### Result ###

See the right side.
