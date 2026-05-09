const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Mongo DB 接続OK！！！');
    })
    .catch(err => {
        console.log('Mongo DB コネクションエラー！！！');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomCityIndex = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 2000) + 1000;
        const camp = new Campground({
            author: '69f58dc96602d36a000a1c63',
            location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`,
            title: `${sample(descriptors)}・${sample(places)}`,
            description: '木曾路はすべて山の中である。',
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[randomCityIndex].longitude,
                    cities[randomCityIndex].latitude
                ]
            },
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/diuiwcvxm/image/upload/v1778121941/YelpCamp/ffcxcdotgovhhp1ohj4k.png',
                    filename: 'YelpCamp/ffcxcdotgovhhp1ohj4k'
                }
            ]
        });
        await camp.save();
    }
} 

seedDB().then(() => {
    mongoose.connection.close();
});