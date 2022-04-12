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
    setTimeout(()=>document.getElementById('png').style.transform = 'translate(0px)', 0)
    setTimeout(()=>{
        const elements = document.querySelectorAll('#specs h1');
        let len = elements.length;
        for(let i = 0; i < len; i++){
            setTimeout(() => {
                elements[i].style = 'transition: 0.5s;opacity: 1;transform: translate(0px,0px)';
            }, i*300);
        }
    }, 400)
    //landscape.style.display = 'none';
    document.querySelector('#header').style.display = 'block';
    document.querySelector('main').style.display = 'block';

}, 4500);
makeAction();
}
start();
window.onscroll = function myFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.querySelector("#intro").style.opacity = "1";
      document.querySelector("#intro").style.transform = "translate(0px,0px)";
    }
    if (document.documentElement.scrollTop > 900) {
        document.querySelector("#interior-section").style.opacity = "1";
        document.querySelector("#interior-section").style.transform = "translate(0px,0px)";
    }
    if (document.documentElement.scrollTop > 1900) {
        document.querySelector("#speed-section").style.opacity = "1";
        document.querySelector("#speed-section").style.transform = "translate(0px,0px)";
        document.querySelector('#speed-scene').style.width = '600px';
    } 
    else {

    }
}
const speedSection = document.getElementById('speed-section');
speedSection.onscroll = function(){
    alert('its working');
    console.log('working');
}