const convertToCelsius = function(temp) {
  let fahrTemp = (temp-32)/1.8;
  return Math.round(fahrTemp*10)/10;

};

const convertToFahrenheit = function(temp) {
  let celsTemp = temp*1.8 + 32;
  return Math.round(celsTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
