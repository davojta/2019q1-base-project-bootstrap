import { draw, drawOnCanvas } from './utils.js';

import './css/styles.css';

const initDom = () => {
  document.querySelectorAll('.el1').forEach(el => {
    el.addEventListener('click', () => {
      el.style.backgroundColor = '#ff8000';
    });
  });
}

const init = () => {
  // eslint-disable-next-line no-console
  console.log('hello world!');

  // function init() {
  //   alert("start!");
  // }

  // add interactivity to pixels
  initDom();

  var frames = [];

  // to extract colors from dom
  var domFrameMatcher = [[['.el1']], [['.el2']]];

  var defaultFrame = [[['fff']], [['fff']]];

  const getFrames = domFrames => {
    const frames = [];

    domFrames.forEach(domFrame => {
      let frame = domFrameMatcher.map(row => {
        return row.map(column => {
          return column.map(pixelSelector => {
            const domPixel = domFrame.querySelector(pixelSelector);

            return getComputedStyle(domPixel).backgroundColor;
          });
        });
      });

      frames.push(frame);
    });

    // console.log('frames', frames);

    return frames;
  };


  let count = 0;

  const startAnimation = () => {
    const frame1 = document.querySelector('.frame1');
    const frame2 = document.querySelector('.frame2');
    const frame3 = document.querySelector('.frame3');

    const domFrames = [frame1, frame2, frame3];

    setInterval(() => {
      const frames = getFrames(domFrames);
      const frame = frames[count % 3];
      // const frame = frames[0 ];
      draw(frame, drawOnCanvas);
      count++;
    }, 1000 / 5);
  };

  document.getElementById('draw').addEventListener('click', () => {
    startAnimation();
  });
};

init();
