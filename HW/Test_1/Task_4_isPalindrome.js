function isPalindrome(string) {

    const startString = string.toLowerCase().split(' ').join('');
    const reverseString = startString.split('').reverse().join('');
   
    if(startString === reverseString) {
        console.log("The string: (" + string + ") is a palindrome");
        return true;
    
    } else {
        console.log("The string: (" + string + ") isn't a palindrome");
        return false;
    }
}

console.log("1 вариант");
isPalindrome("I realy like walking");

console.log("2 вариант");
isPalindrome("шалаш");

console.log("3 вариант");
isPalindrome("Ася, молоко около мяса");

console.log("4 вариант");
isPalindrome("A man a plan a canal Panama");
