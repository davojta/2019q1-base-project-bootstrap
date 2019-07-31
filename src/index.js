import './css/styles.css';

import { addInteractivity } from './change_interactivity';

import { startAnimation } from './animation'

// eslint-disable-next-line no-console
console.log('hello world!');

addInteractivity();

document.getElementById('draw').addEventListener('click', () => {
  startAnimation();
})
