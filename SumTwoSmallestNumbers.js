function sumTwoSmallestNumbers(numbers) {
    /*a function that returns the sum of
    the two lowest positive numbers given an array
    of minimum 4 integers. No floats or empty arrays will be passed.*/

    let sorted = numbers.sort((a,b)=>a-b)
    return sorted[0]+sorted[1]
};

sumTwoSmallestNumbers([1,0,4,23,5])
