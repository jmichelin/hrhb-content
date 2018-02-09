## Prompt

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return null.

Your solution may only iterate over the string once and use O(1) additional memory.

## Example

*Example #1*

For `s = 'abacabad'`, the output should be `'c'`.

There are 2 non-repeating characters in the string: `'c'` and `'d'`. Return `'c'` since it appears in the string first.

*Example #2*

For `s = "abacabaabacaba"`, the output should be `null`.

There are no characters in this string that do not repeat.

---

## Reference solution

```
Strategy: Map char counts into a hash keyed by char, then find the first char with a count of 1.
Big O: O(n) time, O(k)->O(1) space
Still O(1) space because fixed number of letters, doesn't scale with input size.

const findFirstNonRepeatChar = (s) => {
  // for each char
     // increment char count
  // for each found char
    // return if its count is 1
    // Note: this works in modern JS because objects maintain key order
}
```

```
const findFirstNonRepeatChar = (s) => {
  const foundChars = {};
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!foundChars[ch])
      foundChars[ch] = 1;
    else
      foundChars[ch]++;
  }

  for (let key in foundChars) {
    if (foundChars[key] === 1) return key;
  }

  return null;
}
```
