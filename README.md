# snowpack-plugin-sharp

> Use [sharp](https://github.com/lovell/sharpn) to optimize your images in [Snowpack](https://snowpack.dev). This plugin will only transform
> images in `production`.

```properties
$ npm i -D snowpack-plugin-sharp sharp
```

## Installation

```js
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
                quality: 10,
                chromaSubsampling: "4:4:4",
              }),
          },
        ],
      },
    ],
  ],
};
```
