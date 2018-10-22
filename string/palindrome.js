/**
 * check for palindrome in a string
 * @param   {string}  str input string
 * @return  {boolean}     whether or not palindrome
 */

const checkPalindrome = (str) => {
  // remove special characters and change to lowercase
  let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
  str = str.replace(regex, '').toLowerCase();

  for (let i = 0, j = str.length - 1; i < str.length; i++) {
    // check
    if (str.charAt(i) !== str.charAt(j--)) {
      return false;
    }
  }

  return true;
};

module.exports = checkPalindrome;
