const findTheOldest = function(people) {
    let ages = [];
    for (person of people){
        if (Object.hasOwn(person,"yearOfDeath")){
            ages.push(person.yearOfDeath-person.yearOfBirth);
        }else{
            ages.push(new Date().getFullYear()-person.yearOfBirth)
        }
    }
    let i = ages.indexOf(Math.max(...ages));
    return people[i];

};

// Do not edit below this line
module.exports = findTheOldest;
