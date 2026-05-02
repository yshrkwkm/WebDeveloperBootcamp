const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const { storeReturnTo } = require('../middleware');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({username, email});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Yelp Camp へようこそ！');
            res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login',
    // storeReturnTo ミドルウェアで session から res.locals へ returnTo を移す
    storeReturnTo,
    // passport.authenticate が実行されると req.session がクリアされる
    passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
    // ここで res.locals.returnTo を使ってログイン後のページへリダイレクト
    (req, res) => {
        req.flash('success', 'おかえりなさい！！');
        const redirectUrl = res.locals.returnTo || '/campgrounds'; // ここを res.locals.returnTo に変更
        res.redirect(redirectUrl);
    }
);

router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        req.flash('success', 'ログアウトしました');
        res.redirect('/campgrounds');
    });
});

module.exports = router;