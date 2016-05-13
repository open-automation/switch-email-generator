var pug = require('pug');



var options = {
    pretty : true,
    title: "Example"
};


var html = pug.renderFile('./src/view/base.pug', options, function(error, html){
    console.log(html)
});

