## Character pyramid

Write a function that produces a "pyramid", :

Given input of `3`, it should produce a pyramid conceptually like this:

```
  *
 ***
*****
```

However the **exact** return format should be more abstract, in the form of nested arrays:

```
[
  [false, false, true, false, false],
  [false, true, true, true, false],
  [true, true, true, true, true],
]
```

## Minor extension

Note to interviewer: only proceed with this if the first part is completely done and verified.

Next, write a 2nd function that nicely-renders a character pyramid data structure with a given character.

Given the above pyramid data structure and `'X'`, this rendering function would produce:

```
  X
 XXX
XXXXX
```

Given the above pyramid data structure and `'Y'`, this rendering function would produce:

```
  Y
 YYY
YYYYY
```

