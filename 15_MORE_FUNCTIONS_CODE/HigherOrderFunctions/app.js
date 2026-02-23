// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTenTimes(rollDie);

function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('おめでとう！！！');
        }
    } else {
        return function () {
            alert('ウイルスに感染しました！！！');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
        }
    }
}


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    } 
}

makeBetweenFunc(50, 100);