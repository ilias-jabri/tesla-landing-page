const action = document.getElementById('action');

function start(){ 
    function creatSquare(){
        const square = document.createElement('div');
        square.className = 'square';
        return square;
    }
    function squareMouvement(square, time){
        for (let i = 1; i < 500; i++) {
            setTimeout(() => {
                let amount = 600;
                let squares = square;
                squares.style.height = `${i+amount}px`;
            squares.style.width = `${i+amount}px`;
        }, i*1);
        if (i >= 499) {
            setTimeout(()=>{
                action.removeChild(square);
            },500);
        }
    }
}
function makeAction(){
    for(let k = 1; k<40 ; k++){
        setTimeout(() => {
            k
            const square = creatSquare();
            action.appendChild(square);
            squareMouvement(square, k);
        }, 100*k);
        /* setInterval(()=>{
            let theSquare = square;
            action.appendChild(square);
        }, 10000*i); */
    }
}
setTimeout(() => {
    const landscape = document.querySelector('#landscape');
    landscape.style.opacity = '0';
    setTimeout(()=>landscape.style.display = 'none', 400)
    //landscape.style.display = 'none';
    document.querySelector('#header').style.display = 'block';
    document.querySelector('main').style.display = 'block';

}, 4500);
makeAction();
}
start();



function scroll(element){
    if (element.scrollTop > 50) {
        alert('true bro')
    }
}