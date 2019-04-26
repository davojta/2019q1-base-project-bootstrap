// eslint-disable-next-line no-console
console.log('hello world!');

// function init() {
//   alert("start!");
// }

const colorPickerEl = document.getElementById('color_picker');
console.log('colorPickerEl', colorPickerEl);

// need to remove from window after dev end
window.state = {
  currentTool: '',
};

colorPickerEl.addEventListener('click', (event) => {
  console.log('click', event);
  window.state.currentTool = 'colorPicker';
});

document.addEventListener('click', (event) => {
  if (window.state.currentTool === 'colorPicker') {
      const colorValueEl = document.getElementById('chosen_color');
      colorValueEl.textContent = event.target.style.backgroundColor || 'none';
    console.log('color', event.target.style.backgroundColor);
  }
});
