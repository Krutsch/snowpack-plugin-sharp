module.exports = (_, { transformers }) => ({
  name: "snowpack-plugin-sharp",
  async transform({ fileExt, id: filename, isDev }) {
    if (!isDev) {
      const transformer = transformers.find(
        (transformer) => transformer.fileExt === fileExt
      );

      if (transformer) {
        return await transformer.apply(filename).toBuffer();
      }
    }
  },
});
