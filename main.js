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
    spot.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    rows.appendChild(spot);
  }
}
