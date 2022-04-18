function delay(timeInMs){
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
    document.querySelector('#header').style.display = 'block';
    document.querySelector('main').style.display = 'block';
    setTimeout(() => {
        document.getElementById('disclaimer-alert').style.opacity = '1';
    }, 1000);
    
}, timeInMs);
}

delay(1000);

window.onscroll = function myFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.querySelector("#intro").className = 'visible-section';
    }
    if (document.documentElement.scrollTop > 1000) {
        document.querySelector('#show-case-section').className = 'visible-section';
    }
    if (document.documentElement.scrollTop > 1600) {
        document.querySelector("#interior-section").className = 'visible-section';
    }
    if (document.documentElement.scrollTop > 2000) {
        document.querySelector('#speed-specs').style.opacity = '1';
    }
    if (document.documentElement.scrollTop > 2300) {
        document.querySelector("#speed-section").className = 'visible-section';
        const speedScene = document.querySelector('#speed-scene');
        speedScene.style.width = '600px';
    } 
    if (document.documentElement.scrollTop > 3000) {
        document.querySelector('#order-section').className = 'visible-section';
        document.querySelector('#order-section').className = 'visible-section';
    }
    else {

    }
}

let showCaseClickTracker = 0;
function showCaseClickButton(increment){
    let imgs = 6;
    showCaseClickTracker += increment;
    if(showCaseClickTracker < 0) {
        showCaseClickTracker = 0;
        return
    };
    if (showCaseClickTracker >= imgs) {
        showCaseClickTracker = imgs-1
        return
    }
    const gallery = document.querySelectorAll('#imgs-views > *');
    gallery.forEach( img => { img.style.display = 'none'; });
    gallery[showCaseClickTracker].style.display = 'inline-block';
}
function pickCarColors(){
    const colors = document.querySelectorAll('#colors .car-color');
    const imgs = document.querySelectorAll('#the-car > *');
    colors.forEach(color =>{
        color.onclick = function(){
            const hue = color.classList.value.replace('car-color ','');
            imgs.forEach(img =>{
                img.style.display = 'none';
                img.style.transition = '0.5s';
                img.style.opacity = '0';
            });
            document.querySelector(`img[src="./assets/${hue} option.png"]`).style.display = 'inline-block';
            setTimeout(()=>{
                document.querySelector(`img[src="./assets/${hue} option.png"]`).style.opacity = '1';
            },0)
            document.getElementById('chosen-car-color').style.backgroundColor = hue;
        }
    })
}

function pickInteriorColor(){
    const colors = document.querySelectorAll('#interior .car-color');
    const imgs = document.querySelectorAll('#the-car > *');
    colors.forEach(color =>{
        color.onclick = function(){
        const hue = color.classList.value.replace('car-color ','');
        imgs.forEach(img =>{
            img.style.display = 'none';
            img.style.transition = '0.5s';
            img.style.opacity = '0';
        });
        const theImg = document.querySelector(`img[src="./assets/${hue} tesla interior.png"]`);
        theImg.style = 'display: inline-block;';
        setTimeout(()=>{
            theImg.style.opacity = '1';
        },100)
        document.getElementById('chosen-interior-color').style.backgroundColor = hue;
    }
    })
}
function autoPilot(){
    const btns = document.querySelectorAll('.order-section-btns');
    const autoPilot = document.getElementById('autoPilot-option');
    const autoPilotPara = document.querySelector('#autoPilot-option > p');

    btns.forEach(btn =>{
        if (btn.innerText == 'Add') {
            btn.onclick = function(){
                autoPilot.style.display = 'flex';
            }
        }
        if (btn.innerText == 'Discard') {
            btn.onclick = function(){
                autoPilot.style.display = 'none';
            }
        }
    })
    autoPilot.onmouseover = function(){
        autoPilotPara.innerText = ' X ';
        autoPilot.style.cursor = 'pointer';
    }
    autoPilot.onmouseleave = function(){
        autoPilotPara.innerText = 'AutoPilot';
        autoPilot.style.cursor = 'none';
    }
    autoPilot.onclick = function(){
        autoPilot.style.display = 'none';
    }
}
function burgerBtn(btn){
    const section = document.querySelector('#header > nav');
    if (btn.dataset.clicked == '0') {
        section.style.display = 'flex';
        btn.childNodes[1].innerText = 'clear';
        btn.dataset.clicked = '1';
        setTimeout(() => {
            section.style.right = '0px';
        }, 200);
    }else{
        setTimeout(() => {
            section.style.display = 'none';
        }, 100);
        section.style.right = '-300px';
        btn.childNodes[1].innerText = 'menu';
        btn.dataset.clicked = '0';
    }
}
function onResizeWindow(){
    window.onresize = function(){
        if (window.innerWidth > 500) {
            document.querySelector('#header > nav').style.display = 'flex';
        }else{
            document.querySelector('#header > #nav-bar').style.display = 'none';
        }
    }
}
function clearBtn(){
    let disclaimer = document.getElementById('disclaimer-alert');
    document.body.removeChild(disclaimer);
}
onResizeWindow();
autoPilot();
pickCarColors();
pickInteriorColor();