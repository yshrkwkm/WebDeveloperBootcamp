const express = require('express');
const app = express();

const cookierParser = require('cookie-parser');
app.use(cookierParser('mysecret'));

app.get('/greet', (req, res) => {
    const { name = 'anonymous' } = req.cookies;
    res.send(`ようこそ ${name} さん`);
});

app.get('/setname', (rqe, res) => {
    res.cookie('name', 'yamadataro');
    res.cookie('animal', 'cat');
    res.send('クッキー送ったよ');
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true});
    res.send('署名付きクッキーを返したよ');
});

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log('待受中...');
});