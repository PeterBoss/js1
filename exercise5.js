var fs = require('fs')
var path = require('path')

var ext = '.' + process.argv[3]

fs.readdir(process.argv[2], function(err, list) {
    if (err) {
        console.log("ERROR")
    } else {
        for (var index = 0; index < list.length; index++) {
            var element = list[index];
            if (path.extname(element) === ext) {
                console.log(element)
            }
        }
    }
})