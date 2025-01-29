//function that returns number of characters in the string (b)
function charactersCnt(name) {
    return name.length;
}
//running the function
console.log(charactersCnt("test 1"));
//characters counter
function charactersCounter(value) {
    return value.trim().length;
}
//function that returns both
console.log(charactersCounter("test 2"));
function twoStringsTogether(myString, spaces) {
    var num;
    if (spaces) { //print the lenght of num
        num = myString.length;
    }
    else {
        num = myString.trim().length; //trim function to trim the lenght of myString
    }
    return num;
}
//printing both
console.log(twoStringsTogether(" test 1", true));
console.log(twoStringsTogether(" test 1", false));
console.log(twoStringsTogether(" test 1 "));
