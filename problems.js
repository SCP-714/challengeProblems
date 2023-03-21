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