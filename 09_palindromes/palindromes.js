const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,'').toLowerCase();
    let arr = str.split('');
    let rev_arr = arr.map((x)=> x);
    rev_arr.reverse();

    for (let i= 0;i<arr.length;i++){
        if (arr[i] !== rev_arr[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
