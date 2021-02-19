# Word Highlighter

This is **NOT** a [highlight.js](https://highlightjs.org/) plugin.

```html
<pre>
  <code class="word-highlighter">
    $1{He}$2{llo} $3{dark}$4{ness} $5{my old} $6{friend}
  </code>
</pre>
```

## Usage

Add this to your HTML

```html
<script src="/path/to/word-highlighter.min.js"></script>
```

Or require as common modules

```javascript
const wordHighligher = require('word-highlighter');
wordHighligher.registerColors([
  '#ff0000',
  '#00ff00',
  '#0000ff',
])
const html = wordHighligher.renderHtml('$1{Hello} $5{World}'); // 5 % 3 = 2 (Out of bounds safe)
// outputs <span class="word-highlighter-1">Hello</span> <span class="word-highlighter-2">World</span>
```
