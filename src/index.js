const fs = require("fs");
const path = require("path");

module.exports = ({ buildOptions }, { transformers }) => ({
  name: "snowpack-plugin-sharp",

  async transform(x, { fileExt, id: filename, isDev } = x) {
    const transformer = transformers.find(
      (transformer) => transformer.fileExt === fileExt
    );

    if (!isDev) {
      if (transformer) {
        if (transformer.withPreview) {
          // Create low quality image optionally

          const inputFromSrc = filename.split(`${path.sep}src`).pop();
          const inputArr = inputFromSrc.split(path.sep);
          // Add preview Prefix
          inputArr[inputArr.length - 1] = `preview-${
            inputArr[inputArr.length - 1]
          }`;

          await fs.promises.mkdir(
            `${buildOptions.out}${path.sep}_dist_${path.sep}${inputArr
              .slice(0, inputArr.length - 1)
              .join(path.sep)}`,
            { recursive: true }
          );
          await transformer
            .withPreview(filename)
            .toFile(
              `${buildOptions.out}${path.sep}_dist_${path.sep}${inputArr.join(
                path.sep
              )}`
            );
        }

        return await transformer.apply(filename).toBuffer();
      }
    }
  },
});
