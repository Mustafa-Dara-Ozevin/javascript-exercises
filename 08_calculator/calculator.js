const add = function(num1,num2) {
  return num1 + num2;
	
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if (nums.length ===0){
    return 0;
  }
	let sum = 0;
    for (num of nums){
      sum += num;
    }
    return sum;
};

const multiply = function(nums) {
  if (nums.length === 0){
    return 0;
  }
  let result = nums[0];
  for (let i=1; i<nums.length;i++){
    result *= nums[i];
  }
  return result;
};

const power = function(num, power) {
	if (power === 0){
      return 1;
    }
    let result = num;
    for (let i=0; i<power-1;i++){
      result *= num;
    }
    return result;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
	let result = 1;
    for (let i=2;i<=num;i++){
      result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
