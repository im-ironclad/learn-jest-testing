const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('index.html', 'utf8');

// Import methods
const { sum, getPTags } = require('./index');

jest.dontMock('fs');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('test func', () => {
  beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
      // restore the original func after test
      jest.resetModules();
  });

  it('does get some elements', function () {
      expect(getPTags()).toBeTruthy()
  });
})