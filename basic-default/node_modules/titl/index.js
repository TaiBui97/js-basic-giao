var _ = require("lodash");


function titl(srt){
    return str.split(" ").map((o) => _.capitalize(o)).join(" ").trim()
}
exports.default = titl;
