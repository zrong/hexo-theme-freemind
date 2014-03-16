title: Tag Plugins（中文）
date: 2014-03-16 10:10:16
tags: plugins
categories: Docs
description: Introduce tag plugins in freemind.
feature: images/tag-plugins/plugins.jpg
toc: true
---

Freemind 主题提供了丰富的 tag plugins，以充分利用 Bootstrap 的威力。

在使用这些 tag plugins 之前，你需要先安装 [hexo-tag-bootstrap](https://github.com/wzpan/hexo-tag-bootstrap) 。在你的 Hexo 博客目录，执行下列命令：

```
$ npm install hexo-tag-bootstrap --save
```

然后就可以像使用其他 hexo tag plugins 一样使用这些 Bootstrap tag plugins 了。

<!-- more -->

## 按钮（Buttons） ##

插入一个按钮，按钮可以带有链接、文本，并允许指定颜色。

### 语法 ###

{% raw %}
```
{% btn url text [color] %}
```
{% endraw %}

### 示例 ###

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

### 结果 ###

{% btn http://hahack.com hahack %}

{% btn http://hahack.com hahack blue %}

{% btn http://hahack.com hahack green %}

{% btn http://hahack.com hahack yellow %}

{% btn http://hahack.com hahack red %}

{% btn http://hahack.com hahack black %}

## 标签（Labels） ##

插入一个标签，并为其指定文本和颜色。

### 语法 ###

{% raw %}
```
{% label text [color] %}
```
{% endraw %}

### 示例 ###

{% raw %}
```
{% label red red %}

{% label blue blue %}

{% label black black %}
```
{% endraw %}

### 结果 ###

{% label grey %}

{% label yellow yellow %}

{% label green green %}

{% label red red %}

{% label blue blue %}

{% label black black %}

## 徽章（Badges） ##

插入一个徽章，并为其指定文本和颜色。

### 语法 ###

{% raw %}
```
{% badge text [color] %}
```
{% endraw %}

### 示例 ###

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

### 结果 ###

{% badge grey %}

{% badge yellow yellow %}

{% badge green green %}

{% badge red red %}

{% badge blue blue %}

{% badge black black %}

## 警告（Alerts） ##

插入一个警告Inserts a label with text and specified color.

### 语法 ###

{% raw %}
```
{% alert [color] %}
   Alert string
{% endalert %}
```
{% endraw %}

### 示例 ###

{% raw %}
```
{% alert yellow %}Best check yo self, you're not looking too good.{% endalert %}

{% alert red %}Change a few things up and try submitting again.{% endalert %}

{% alert green %}You successfully read this important alert message.{% endalert %}

{% alert blue %}This alert needs your attention, but it's not super important.{% endalert %}
```
{% endraw %}

### 结果 ###

{% alert yellow %}Best check yo self, you're not looking too good.{% endalert %}

{% alert red %}Change a few things up and try submitting again.{% endalert %}

{% alert green %}You successfully read this important alert message.{% endalert %}

{% alert blue %}This alert needs your attention, but it's not super important.{% endalert %}

## 边注（Side Notes） ##

Freemind 的一个有趣的特性是你可以在页面的侧边插入边注。

{% alert red %}
为了避免边注文本后面的文字自动折行影响观感，建议禁用 Markdown 的 `breaks` 选项。在你的博客根 `_config.yml` 文件中修改相应部分：

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

### 语法 ###

{% raw %}
```
{% sidenote index %}
  Side note text
{% endsidenote %}
```
{% endraw %}

### 示例 ###

{% raw %}
```
See the right side{% sidenote 1 %}This is a side note.{% endsidenote %}.
```
{% endraw %}

### 结果 ###

见右侧{% sidenote 1 %}这是一个边注。{% endsidenote %}。

## 侧边附图（Side Images） ##

类似地，你还可以在侧边插入附图{% sideimg /images/tag-plugins/plugins.jpg 1 %}这是一个侧边附图。{% endsideimg %}。

### 语法 ###

{% raw %}
```
{% sideimg url [index] %}
  Side image text
{% endsideimg %}
```
{% endraw %}

### 示例 ###

{% raw %}
```
{% sideimg /images/tag-plugins/plugins.jpg 1 %}
This is a side image.
{% endsideimg %}
```
{% endraw %}

### 结果 ###

见右侧。
