const isNumberPalindrome = (number) => {
  let numberCopy = number;
  let reversedNumber = 0;
  let digit;
  while (numberCopy > 0) {
    digit = numberCopy % 10;
    reversedNumber = (reversedNumber * 10) + digit;
    numberCopy = Math.floor(numberCopy / 10);
  }
  return reversedNumber === number;
};

module.exports = isNumberPalindrome;

/*
Make a copy of the original input and pluck units digit using modulo and place in reversed version
until done, compare the reversed number with the original. If equal, return true.

Steps
1
  Copy the input 1331
  digit = 1331 % 10 = 1
  reversed number = 1
  number copy = 133

2
  digit = 133 % 10 = 3
  reversed number = 13
  number copy = 13

3
  digit = 13 % 10 = 3
  reversed number = 133
  number copy = 1

4
  digit = 1 % 10 = 1
  reversed number = 1331
  number copy = 0

5
  1331 = 1331 return true


const isNumberPalindrome = (number) => {
  // copy input number to pluck from
  // init reversed number and digit
  // iterate until copy is 0 or less
    // grab digit from units place;
    // push digit into reversed number
    // remove digit from copy
  }
  return reversed === number;
}

 */
