var fs=require('fs');
fs.readFile(process.argv[2],function(err,contents){
    var data=contents.toString().split('\n').length-1;
    console.log(data)
})

// fs.readFile(process.argv[2],'utf8',callback(err,contents){
//     var data=contents.toString().split('\n').length-1;
//     console.log(data)
// })  