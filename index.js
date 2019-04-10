var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
} )

app.get('/about',function(req,res){
    res.sendFile(__dirname + '/about.html');
} )

var students = {1:' hari', 2:'geri', 3:'suri' };

app.get('/students/:id', function(req,res){
    res.render('students',{name: students[req.params.id],id: students[req.params.id]});
})

app.listen(3000, function(){
        console.log('surver started AT port no 3000');
})

