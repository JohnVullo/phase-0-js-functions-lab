//function to calculate tax amount
function calculateTax(amount){
    //compares of amount is 0
    if(amount === 0){
        return 0
    
    // compares of amount is less than 0
    } else if(amount < 0) { 
        let taxAmt = amount * .1
        return taxAmt
    //returns correct tax amount
    } else {
        taxAmt = amount * .1
        return taxAmt
    }
}

//function to convert lower case text to upper case
function convertToUpperCase(text){
    //creates variable for new word for comparison and makes it upper case
    let newWord = text.toUpperCase()
    //returns string if text is already upper case
    if(newWord === text){
        return text
    //compares if input is lower case
    } else if (newWord = text.toLowerCase()){
        //if lower case, make upper case and return
        newWord = text.toUpperCase()
        return newWord
    }

}

//function to compare two numbers
function findMaximum(num1, num2){
    //if numbers are equal, return first number
    if (num1 === num2){
        return num1
    //if number 1 is greater, return number 1
    } else if (num1 > num2){
        return num1
    //if number 2 is greater, return number 2
    } else if (num1 < num2)
        return num2

}

//function to check if word is palindrome
function isPalindrome(word){
    //if word isn't palendrome, return false
    if((word !== word.split('').reverse().join(''))){
        return false
    //if word is empty, return true
    } else if(word === ""){
        return true
    //if word is one letter, return true
    } else if (word = 1){
        return true
    //else if word is palindrome, return true
    } else if (word === word.split('').reverse().join('')){
        return true   
    } 
}

//function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountedPercentage){
    //if discount percent is 0, return original price
    if(discountedPercentage === 0){
        return originalPrice
    //if discount percent is 100, return 0
    } else if (discountedPercentage === 100){
        return 0
    //if discount percent is greater than 100, return price
    } else if (discountedPercentage > 100){
        let discountedPrice = originalPrice * (discountedPercentage / 100)
        return originalPrice - discountedPrice 
    }
    //return correct discounted price
    else {
        discountedPrice = originalPrice * (discountedPercentage / 100)
        return originalPrice - discountedPrice 
    }
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };