const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('接続OK！！！');
    })
    .catch(err => {
        console.log('コネクションエラー！！！');
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
});

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({name: 'yamada99', age: 61});
//     const user = await User.findOne({age: 61})
//     const tweet2 = new Tweet({text: 'ほげもげほげもげ', likes: 100});
//     tweet2.user = user;
//     user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async() => {
    const t = await Tweet.find({}).populate('user', 'username');
    
}