const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index', {
        name : "My Name is Node.JS"
    });
});
app.get('/post', (req,res)=>{
    res.render('form');
});
app.post('/post', (req,res)=>{
    res.render('index',{
        name : req.body.textname
    });
});
/*
app.get('/about', (req, res)=>{
    res.send('This is about page');
});
*/

app.listen(2019, ()=>{
    console.log('Server is running at port 2019');
});