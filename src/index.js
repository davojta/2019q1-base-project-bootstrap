// eslint-disable-next-line no-console
console.log('hello world!');

// function init() {
//   alert("start!");
// }

const colorPickerEl = document.getElementById('color_picker');
console.log('colorPickerEl', colorPickerEl);

// need to remove from window after dev end
window.state = {
    currentTool: 'colorPicker',
};

colorPickerEl.addEventListener('click', function(event) {
    console.log('click', event);
});

document.addEventListener('click', (event) => {
    console.log('click', event);
    console.log('color', event.target.style.backgroundColor);
});