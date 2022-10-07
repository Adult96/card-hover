'use strict';

const card = document.querySelector('.card');
const light = document.querySelector('.light');

card.addEventListener('mouseenter', () => {
  card.addEventListener('mousemove', move);
});

card.addEventListener('mouseleave', (e) => {
  card.removeEventListener('mousemove', move);
  light.style.backgroundImage = '';
  card.style.transform = '';
  card.style.boxShadow = '';
});

function move(e) {
  const { clientX, clientY } = e;
  const { x, y, width, height } = card.getBoundingClientRect();
  const left = clientX - x;
  const top = clientY - y;
  let horizental = left - width / 2;
  let vertical = top - height / 2;
  let d = Math.sqrt(horizental ** 2 + vertical ** 2);

  light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000010,#ffffff00 ,#ffffff70)`;

  card.style.transform = `rotate3d(${vertical / 100}, ${
    -horizental / 100
  }, 0, ${d / 10}deg)`;

  card.style.boxShadow = `${horizental / 10}px ${vertical / 10}px 15px 7px
    rgba(0, 0, 0, 0.6)`;
}
