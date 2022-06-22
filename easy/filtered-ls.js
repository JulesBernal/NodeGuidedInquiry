var fs = require("fs");
var path = require("path");
var ext = "." + process.argv[3];
// function callback(err, list) {  
//     if (err) return console.error(err);
//   list.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   })
// };
// fs.readdir(process.argv[2], callback(err, list));
fs.readdir(process.argv[2], function(err, list){
    if (err) return console.error(err);
    list.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file);
    }
    })
});