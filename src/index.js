module.exports = ({ buildOptions }, { transformers }) => ({
  name: "snowpack-plugin-sharp",
  async transform({ fileExt, id: filename, isDev, filePath }) {
    const transformer = transformers.find(
      (transformer) => transformer.fileExt === fileExt
    );

    if (!isDev) {
      if (transformer) {
        if (transformer.withPreview) {
          // Create low quality image optionally
          await transformer
            .withPreview(filename)
            .toFile(`${buildOptions.out}\\_dist_\\preview-${filePath}`);
        }

        return await transformer.apply(filename).toBuffer();
      }
    }
  },
});
