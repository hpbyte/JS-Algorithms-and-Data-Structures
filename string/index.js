const checkPalindrome = require('./palindrome');

console.log('eye should return true                             : ' + checkPalindrome('eye'));
console.log('_eye should return true                            : ' + checkPalindrome('_eye'));
console.log('race car should return true                        : ' + checkPalindrome('race car'));
console.log('not a palindrome should return false               : ' + checkPalindrome('not a palindrome'));
console.log('A man, a plan, a canal. Panama should return true  : ' + checkPalindrome('A man, a plan, a canal. Panama'));
console.log('never odd or even should return true               : ' + checkPalindrome('never odd or even'));
console.log('nope should return false                           : ' + checkPalindrome('nope'));
console.log('almostomla should return false                     : ' + checkPalindrome('almostomla'));
console.log('My age is 0, 0 si ega ym. should return true       : ' + checkPalindrome('My age is 0, 0 si ega ym.'));
console.log('1 eye for of 1 eye. should return false            : ' + checkPalindrome('1 eye for of 1 eye.'));
console.log('0_0 (: /-\\ :) 0-0 should return true               : ' + checkPalindrome('0_0 (: /-\ :) 0-0'));
console.log('five|\\_/|four should return false                  : ' + checkPalindrome('five|\_/|four'));
