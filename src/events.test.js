const { clickHandler } = require('./events');

// extract function as separate function
// attach all dependecies as argumentss
// move function to separate files

// bdd style
describe('events', () => {
    it('clickHandler changes background color of element', () => {
        document.body.innerHTML =
    '<div>' +
    '  <span id="el" style="background-color: white;" />' +
    '</div>';

        const el = document.querySelector('#el');

        clickHandler(el)();

        expect(el.style.backgroundColor).toBe('rgb(255, 128, 0)');
    })
});