import browserify from "browserify";
import fs from "fs";

browserify()
  .require(require.resolve('./editor'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
