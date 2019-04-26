// eslint-disable-next-line no-console
console.log('hello world!');

// function init() {
//   alert("start!");
// }

const colorPickerEl = document.getElementById('color_picker');
// console.log('colorPickerEl', colorPickerEl);

// need to remove from window after dev end
window.state = {
  currentTool: '',
};

colorPickerEl.addEventListener('click', (event) => {
  // eslint-disable-next-line no-console
  console.log('click', event);
  window.state.currentTool = 'colorPicker';
  colorPickerEl.classList.add('highlight-color-picker');
});

const headerEl = document.getElementById('header');

headerEl.addEventListener('click', () => {
  // console.log('header click');
  window.state.currentTool = 'none';
  colorPickerEl.classList.remove('highlight-color-picker');
});

document.addEventListener('click', (event) => {
  if (window.state.currentTool === 'colorPicker') {
    const colorValueEl = document.getElementById('chosen_color');
    colorValueEl.textContent = event.target.style.backgroundColor || 'none';
    // console.log('color', event.target.style.backgroundColor);
  }
});
