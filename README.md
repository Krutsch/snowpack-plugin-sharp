# snowpack-plugin-sharp

> Use [sharp](https://github.com/lovell/sharpn) to optimize your images in [Snowpack](https://snowpack.dev). This plugin will only transform
> images in `production`.

```properties
$ npm i -D snowpack-plugin-sharp sharp
```

## Installation

```js
const sharp = require("sharp");

// snowpack.config.js
module.exports = {
  plugins: [
    [
      "snowpack-plugin-sharp",
      {
        transformers: [
          {
            fileExt: ".jpg",
            apply: (file) =>
              sharp(file).jpeg({
                quality: 50,
                chromaSubsampling: "4:4:4",
              }),
          },
        ],
      },
    ],
  ],
};
```

---

Optionally, it is possible to create a second Image with 'preview-' prefix in the filename. This can be useful for generating low quality images for instance.

```js
{
  fileExt: ".webp",
  withPreview: (file) => sharp(file).webp({ quality: 1 }),
  apply: (file) =>
    sharp(file).webp({
      quality: 60,
    }),
}
```
