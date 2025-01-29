//function that returns number of characters in the string (b)
function charactersCnt(name: string): number{
    return name.length;
}

//running the function
console.log(charactersCnt("test 1"));

//characters counter
function charactersCounter(value: string): number{  
    return value.trim().length;
}

//function that returns both
console.log(charactersCounter("test 2"));

 function twoStringsTogether(myString: string, spaces: boolean): number {
    let num:number;
    if(spaces){
        num = myString.length;
    }else{
        num = myString.trim().length;
    }
        return num;
}
    //printing both
    console.log(twoStringsTogether(" test 1", true));
    console.log(twoStringsTogether(" test 1", false));

    