const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('接続OK！！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [{
        _id: { id : false },
        country: String,
        prefecture: String,
        address1: String,
        address2: String,
    }]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        firts: '太郎',
        last: '山田'
    });

    u.addresses.push({
        country: '日本',
        prefecture: '北海道',
        address1: '札幌市',
        address2: '０丁目０番地',
    });

    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        country: '日本',
        prefecture: '青森県',
        address1: '青森市',
        address2: '０丁目０番地',
    });
    const res = await user.save();
    console.log(res);
}

addAddress('69e79594a5325a068c265e90');