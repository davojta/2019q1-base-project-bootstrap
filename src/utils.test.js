
const {  draw, drawOnCanvas } = require('./utils.js')

test('test utils', () => {
  // setup
  const mockFn = jest.fn();
  var defaultFrame = [[['fff']], [['fff']]];
 
  // action
  draw(defaultFrame, mockFn)

  // assessment
  expect(mockFn).toHaveBeenCalled();
});