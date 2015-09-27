# utf82hex

## Usage

```javascript
> var utf82hex = require('utf82hex')
undefined
> utf82hex("漢字") // This is represented as unicode codepoints '\u6f22' + '\u5b57'
'e6bca2e5ad97'     // Hex string representation of the unicode encoded in utf-8
```

[漢](http://www.fileformat.info/info/unicode/char/6f22/index.htm)

[字](http://www.fileformat.info/info/unicode/char/5b57/index.htm)

Look at the "UTF-8 (hex)" section and compare to the output to see how it works.
