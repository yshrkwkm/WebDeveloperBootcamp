const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const Farm = require('./models/farm');

const sessionOptions = {secret: 'mysecret', resave: false, saveUninitialized: false};
app.use(session(sessionOptions));
app.use(flash());

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo DB 接続OK！！！');
    })
    .catch(err => {
        console.log('Mongo DB コネクションエラー！！！');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

const categories = ['果物', '野菜', '乳製品'];

// Farm関連
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', '新しい農場を登録しました');
    res.redirect('/farms');
});

app.delete('/farms/:id', async (req, res) => {
    await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待ち受け中...');
});
