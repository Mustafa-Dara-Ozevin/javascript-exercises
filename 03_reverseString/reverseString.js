const reverseString = function(word) {
    let reversed = "";
    const letters = word.split("");
    for (let i=letters.length-1;i>=0;i--){
        reversed += letters[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
