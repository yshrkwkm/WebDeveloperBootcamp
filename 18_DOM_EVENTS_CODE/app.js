const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('クリックした！');
    console.log('ほげほげ');
}

function scream() {
    console.log('あああああああああ');
    console.log('いやあああああああ');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function() {
    alert('h1をクリック');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function() {
    alert('クリック！！！');
})