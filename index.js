function sum(a, b) {
  return a + b;
}

function getPTags() {
  return Array.from(document.querySelectorAll('p')).length;
}

module.exports = {
  sum,
  getPTags
}