
const {  draw, drawOnCanvas } = require('./utils.js')


function sum(a, b) {
  return a + b;
}

test('test utils', () => {
  expect(draw([], drawOnCanvas)).toBe(3);
});