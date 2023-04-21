const removeFromArray = function(array, element, ...others) {
    let index = array.indexOf(element);
    if (index !== -1){
        array.splice(index,1);
    }
    for (let val of others){
        let index = array.indexOf(val);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
