const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功１！');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功２！');
//                 fakeRequestPromise('yelp.com/api/coffee/page2')
//                     .then(() => {
//                         console.log('成功３！');
//                     })
//                     .catch(() => {
//                         console.log('失敗３！')
//                     })
//             })
//             .catch(() => {
//                 console.log('失敗２！')
//             })
//     })
//     .catch(() => {
//         console.log('失敗１！');
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('成功１！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('成功２！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('成功３！');
        console.log(data);
    })
    .catch((err) => {
        console.log('失敗！');
        console.log(err);
    })