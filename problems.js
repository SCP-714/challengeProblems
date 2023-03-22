function twoSum (numbers, target) {   
    const result = [];

    for (let i = 0; i < numbers.length; i++) {  

        for (let j = i+1; j < numbers.length; j++) {       
            const firstNumber = numbers[i];       
            let secondNumber = numbers[j];
                   
            if (firstNumber + secondNumber === target) {         
                result.push(i, j);         
                return result;       
            }      
        }  
    }   
    return result; 
}


var isPalindrome = function(x) {

    var reverseStr = x.toString().split("").reverse().join("");
    if(x == reverseStr){
        return true;
    }else{
        return false;
    };
 };