function singSong() {
    console.log('ド');
    console.log('レ');
    console.log('ミ');
}

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

greet('Ken', 'Fukuyama');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('hi', 3);