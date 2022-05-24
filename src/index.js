import "./styles/styles.css";
import "./assets/svg/favicon.svg"

let a = 2;
let b = 2;
let l = 1;
let y = x => x*1+0; // функция
let z = 40; // масштаб
let c = document.querySelector('canvas');
let ctx = c.getContext('2d');

// центровочка
ctx.translate(c.width/2, c.height/2)
   
// направляющие
// x
ctx.lineWidth = 2;
ctx.strokeStyle = 'black'
ctx.beginPath();
ctx.moveTo(- c.width, 0);
ctx.lineTo(c.width, 0);
ctx.fillText('x', z*5-20, 20)
ctx.stroke();
// y
ctx.lineWidth = 2;
ctx.strokeStyle = 'black'
ctx.beginPath();
ctx.moveTo(0, - c.height);
ctx.lineTo(0, c.height);
ctx.stroke();


// сетка
ctx.lineWidth = 0.5;
ctx.beginPath();
for (let x = -6; x <= 6; x++) {
  ctx.moveTo(x*z, -c.height/2);
  ctx.lineTo(x*z, c.height/2);
  ctx.moveTo(-c.width/2, x*z);
  ctx.lineTo(c.width/2, x*z);
}
ctx.stroke();

// график функции
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.beginPath();
for (var i = -7; i <= 7; i += 0.2) {
  ctx[i?'lineTo':'moveTo'](i*z, -y(i)*z);
}
ctx.stroke();