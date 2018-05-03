One of the biggest problem-solving anti-patterns for programmers is to just dive into coding without a plan.

One of the most effective ways to plan a program is to judiciously use two techniques: _outlining_ and _stubbing_ to sketch out a "skeleton" before you really dive into implementation.

Outlining your strategy
-----------------------

The essence of your program is your algorithmic strategy for converting the input into the output, including your choice of key data structure(s).

If you keep your plan of attack at a higher level of abstraction, your written program "skeleton" will really help you keep your mind straight about what code to write next, and why.

Note: often people refer to English-language "outlining" of a program as `pseudocode`. That term is often used to denote something a bit different, more like raw code, but in "computerese" English. If you hear the term "pseudocode", it's more fruitful for you to think of it as referring to the style of outlining-and-stubbing described in this article.

### Example of outlining

To illustrate outlining your program, let's first look at a subpar example of outlining, then convert it to a good example of outlining.

Given this problem statement:

    Write a function called "findFirstWordWithMostRepeatedChars" that accepts a string.
    
    As its name suggests, it returns the first word in a given string
    with the most repeated characters.
    
    "Words" are understood to be space-delimited.

#### So-so attempt

Here's a not-very-actionable example of an English outline of a solution to the above problem.

    // 1) Break up phrase into individual words.
    // 2) Break up individual words into individual letters.
    // 3) Return the word that has the highest count for a single letter.

Why is it only so-so? It's because step (3) is too vague to actually do much with.

If you handed the above outline to another programmer, they would have a hard time understanding what you were asking them to do, exactly.

#### A better attempt

      // Break input text into words, splitting on spaces.
      // For each word...
          // find the max repeat count in that word by adding every character into a hash-bucket
          //  If that max repeat count is higher than the overall max repeat count, then
          //    keep track of the word with the max repeat count

Why is this example better? Because it offers two more-specific details:

1.  how we find the max repeat count in a single word (by counting characters in a hashtable)
2.  the fact that we keep track of the word with the max repeat count as we go

Stubbing your implementation
----------------------------

A complementary technique is writing "stub" functions. These are functions that have been defined in code, but their implementation is intentionally missing. Stubs are a kind of placeholder. It helps to sketch out the "skeleton" of intent even further, and more precisely, without committing yet to writing out every line of code and potentially losing track of your budding plan.

Let's illustrate this idea by extending the above outlining example to include a stubbing aspect:

    const findMaxRepeatCountInWord = function(word) {
      // Break up individual words into individual letters.
      // Count the instances of each letter
      // Iterate all the counts and find the highest
      // Return this word's max repeat count
    }
    
    const findFirstWordWithMostRepeatedChars = function(text) {
      var maxRepeatCountOverall = 0;
      var wordWithMaxRepeatCount = '';
    
      // Break up input text into words (space-delimited).
      // For each word...
          var repeatCountForWord = findMaxRepeatCountInWord(word)
          //  If that max repeat count is higher than the overall max repeat count, then
          //    update maxRepeatCountOverall
          //    update wordWithMaxRepeatCount
    
      return wordWithMaxRepeatCount;
    }

### Things to note about this skeleton

This skeleton mixes stubbed-out variables and functions along with English-language commentary about the intended approach.

*   A couple of key variables have been written directly as clearly-named code, rather than regular English.
*   Similarly, some clearly-named functions have been written as code, not English.
*   Each function declares its parameters. The parameters themselves have clear names too, just like the other variables.
*   Each function has some English description of how that function processes its input into output. This isn't exactly pseudocode, it's more of a bullet-point outline of intent.
*   The return value of each function is explicitly declared.

This style of mixed stubs and English SAVES TIME. This style succinctly conveys your intended approach and minimizes the amount of retyping you will have to do to convert your outline into working code.

_Mental note: that efficiency gain is especially important when you are performing under the time constraints of a live interview._
