const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const data = require('./userData.js');
const data2 = require('./data.js');
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(function (req, res, next) {
    var views = req.session.views = {};
    if (!views) {
        views = req.session.views = {};
    }

    //get the url pathname
    var pathname = parseurl(req).pathname;

    //count the views
    views[pathname] = (views[pathname] || 0) + 1

    next();
})


function authenticate(req, username, password){
    var authenticatedUser = data.users.find(function (user) {
        if (username === user.username && password ===
            user.password) {
                req.session.authenticated = true;
                console.log('User & Password Authenticated');
            } else {
                return false
            }
    });
}










app.get('/', function(req, res){
    res.redirect('/login');
})

app.get('/login', function (req, res){
    res.render('index');
})

app.post('/', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    authenticate(req, username, password);
    if (req.session && req.session.authenticated){
        res.render('welcome', { users: data2.users });
    } else {
        res.redirect('/')
    }
})

app.listen(3000, function(){
    console.log('Started express application!')
})