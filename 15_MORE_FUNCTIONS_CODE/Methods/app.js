const myMath = {
    PI: 3.14,
    function (num) {
        return num * num;
    },
    function (num) {
        return num ** 3;
    }
}

const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカンショートヘア',
    cry () {
        console.log(this);
        console.log(`${this.name}がにゃーと鳴きました。`);
    }
}

const cry2 = cat.cry;