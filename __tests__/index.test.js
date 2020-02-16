// Import Packages
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Import methods
const { getPTags } = require('../index');

jest.dontMock('fs');

test('Button changes text', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <p>Paragraph Element</p>' +
    '  <button id="button" />' +
    '</div>';

  const btn = document.getElementById('button');
  const pEl = document.querySelector('p');
  btn.click();

  expect(pEl.textContent).toEqual('Yay, text changed!');
})

describe('My query selector', () => {
  beforeAll(() => {
      document.documentElement.innerHTML = html.toString();
  });

  afterAll(() => {
      // restore the original func after test
      jest.resetModules();
  });

  it('Queries at least 1 element', function () {
      expect(getPTags()).toBeTruthy()
  });
})