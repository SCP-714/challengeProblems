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




 var longestPalindrome = function(s) {
    let str="";

    for(let i=0;i<s.length;i++){
        for(let j=0;j<2;j++){
            let left=i;
            let right=left+j;
            while(s[left]&&s[left]===s[right]){
                left--;
                right++;
            }
            if(right-left-1>str.length){
                str=s.slice(left+1,right);
            }
        }
    }
    return str;
};