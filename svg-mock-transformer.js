module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    return 'a-mock-svg-to-support-tests';
  },
};