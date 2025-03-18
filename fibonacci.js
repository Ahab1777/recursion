function fibs(n){
    let fibs = [0, 1]
    for (let i = 2; i <= n; i++){
        fibs.push(fibs[i - 1] + fibs[i - 2])
    }
    return fibs[n]
}



function fibsRec(n) {
    //Base case
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    // Recursion
    const fibsArray = fibsRec(n - 1);
    // Add the next Fibonacci number to the array
    const nextValue = fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
    fibsArray.push(nextValue);
    return fibsArray;
}

//4
//fibsRec(4 - 1)
    //3
    //fibsRec(3 - 1)
        //2
        //return [0,1]
    //return [0,1,1]
//return [0,1,1,2]
        
