import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy2";
import zip from "rollup-plugin-zip";

const toBundle = ["template.json", "system.json", "css/main.css", "LICENSE"];

const releaseBuild = true;

const destinationDir = "dist";

export default [
  {
    input: "src/genesys.js",
    output: {
      dir: destinationDir,
      format: "umd",
    },
    plugins: [
      terser({
        sourcemap: !releaseBuild,
        compress: releaseBuild ? {} : false,
      }),
      copy({
        assets: toBundle,
      }),
      zip({
        dir: destinationDir,
      }),
    ],
  },
];
