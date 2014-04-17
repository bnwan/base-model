/**
 * Created by Benjamin on 17/04/2014.
 */

var b = require("browserify")(),
    fs = require("fs");

b.add("./base-model.js");
b.bundle({standalone: "base-model"}, function (err, code) {
    fs.writeFileSync("base-model.bundle.js", code);
});