const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('common'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('いぬーーー！');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'supersecret') {
        return next();
    }
    res.send('パスワードが必要です');
};

// app.use((req, res, next) => {
//     console.log('初めてのミドルウェア！');
//     return next();
//     console.log('初めてのミドルウェアのnextの後の処理！！！');
// });
// app.use((req, res, next) => {
//     console.log('2個目のミドルウェア！');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('3個目のミドルウェア！');
//     return next();
// });

app.get('/', (req, res) => {
    res.send('ホームページ！！');
})

app.get('/error', (req, res) => {

});

app.get('/dogs', (req, res) => {
    res.send('わんわん');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('ここは秘密のページです！！誰にも言わないで！');
});

app.get('/admin', (req, res) => {
    throw new AppError('管理者しかアクセスできません！', 403);
});

app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
});

app.use((err, req, res, next) => {
    const { status = 500, message = '何かエラーが起きました' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('localhost:3000で待ち受け中...');
});