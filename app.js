const cols = 3;
const main = document.getElementById('main');
let parts = [];

let images = [
    "images/bg1.jpeg",
    "images/bg2.jpeg",
    "images/bg3.jpeg",
];

let current = 0;
let playing = false;

for (let i in images){
    new Image().src = images[i];
}

for (let col = 0; col < cols; col++){
    let part = document.createElement('div');
    part.className = 'part';
    let el = document.createElement('div');
    el.className = 'section';
    let img = document.createElement('img');
    img.src = images[current];
    el.appendChild(img);
    part.style.setProperty('--x', -100/cols*col+'vw');
    part.appendChild(el);
    main.appendChild(part);
    parts.push(part);
}