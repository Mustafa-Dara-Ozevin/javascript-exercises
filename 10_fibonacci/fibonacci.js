const fibonacci = function(num) {
    if (!Number.isInteger(num)){
        num = parseInt(num);
    }
    if (num < 0){
        return "OOPS"
    }
    let current = 1;
    let previous1 = 1;
    let previous2 = 0;
    for (let i = 1; i<num; i++){
        current = previous1 + previous2;
        previous2 = previous1;
        previous1 = current;
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
