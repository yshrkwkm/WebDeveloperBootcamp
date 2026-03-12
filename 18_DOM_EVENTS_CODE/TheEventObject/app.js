document.querySelector('button').addEventListener('click', function(evt) {
    alert('クリック');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e);
})

window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp': 
            console.log('↑');
            break;
        case 'ArrowDown': 
            console.log('↓');
            break;
        case 'ArrowLeft': 
            console.log('←');
            break;
        case 'ArrowRight': 
            console.log('→');
            break;
        default: 
            console.log('無視');
    }

});