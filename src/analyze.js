function analyze(arr) {
  return {
    average: arr.reduce((prev, i) => prev + i) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = analyze;