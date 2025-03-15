
function mode() {
let toggle = document.querySelector('#btn');
let body = document.querySelector('body');    
let currentBg = window.getComputedStyle(body).backgroundColor;

if (currentBg === 'rgb(211, 211, 211)' || currentBg === 'rgba(0, 0, 0, 0)') {  
    console.log('Switching to Dark Mode');
    body.style.background = 'black';
    body.style.color = 'white';
    toggle.textContent = 'CHANGE TO LIGHT MODE';
    toggle.classList.add("dark-btn");
} else {
    console.log('Switching to Light Mode');
    body.style.background = 'lightgray';
    body.style.color = 'black';
    toggle.textContent = 'CHANGE TO DARK MODE';
    toggle.classList.remove("dark-btn");
}

body.classList.add("fade");
setTimeout(() => {
    body.classList.remove("fade");
}, 500);
}
