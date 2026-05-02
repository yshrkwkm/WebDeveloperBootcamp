const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose, {
    errorMessages: {
        UserExistsError: 'そのユーザー名はすでに使われています',
        MissingPasswordError: 'パスワードを入力してください',
        AttemptTooSoonError: 'アカウントがロックされています。時間をあけて再度試してください',
        TooManyAttemptsError: 'ログインの失敗が続いたため、アカウントをロックしました',
        NoSaltValueStored: '認証ができませんでした',
        IncorrectPasswordError: 'パスワードまたはユーザー名が間違っています',
        IncorrectUsernameError: 'パスワードまたはユーザー名が間違っています',
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;