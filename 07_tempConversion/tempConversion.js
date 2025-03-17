const convertToCelsius = function(Fdegree) {
  let celsius = Math.round(((Fdegree - 32)*(5/9)) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(Cdegree) {
  let far = Math.round((Cdegree * (9/5) + 32) * 10) / 10;
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
