# astro-importmaps

This example shows you how to use importmaps at build time to fetch client side dependencies from [esm.sh](https://esm.sh/). The dependencies in this case are react and react-dom, they are imported through url imports.

Using `rollup-plugin-import-map` bare imports are mapped to url imports at build time.

```javascript
// Bare import
import React from "react"

// Url import
import React from "https://esm.sh/react@18.2.0"
```

Note that the packages are imported over http3 and gets cached in the browser. This means that you don't have to donwload react and react-dom on the second page reload.
