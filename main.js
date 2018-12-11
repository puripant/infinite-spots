const offset = 100;

let rows = document.querySelector('#rows');
rows.addEventListener('scroll', function () {
  if (rows.scrollTop + rows.clientHeight + offset >= rows.scrollHeight) {
    load();
  }
});

load();

function load() {
  for (let i = 0; i < 1000; i++) {
    let spot = document.createElement('div');
    spot.className = 'spot';
    let red = rand(50, 255);
    let blue = rand(50, 255);
    let green = constrain(Math.floor((red + blue) / 2) + rand(-50, 50), 0, 255); //from x/3 + y/3 -2z/3 = 0
    let color_string = `rgb(${constrain(red + rand(-50, 50), 0, 255)}, ${green}, ${constrain(blue + rand(-50, 50), 0, 255)})`;
    spot.style.backgroundColor = color_string;
    // hue: 0/360 = red, 120 = green, 240 = blue
    // spot.style.backgroundColor = `hsl(${rand(0, 360)}, ${rand(30, 100)}%, ${rand(20, 100)}%)`;
    // spot.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    rows.appendChild(spot);
  }
}
function rand(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
function constrain(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
