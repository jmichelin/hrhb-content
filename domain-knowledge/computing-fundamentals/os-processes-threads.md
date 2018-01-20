# Computing fundamentals

## Operating systems, processes and Threads

* [The role of the operating system](https://www.bottomupcs.com/chapter03.xhtml#role_of_operating_system) When doing system design, it's important to have clear mental models of how the operating system is managing processes, and the resources they consume. Your running app is one of these processes, and it is certainly interacting with other processes on the machine, or on other machines. Learn enough to visualize these interactions, and be able to draw boxes-and-arrows diagrams!
* [Processes and threads](https://www.computerworld.com/article/2585661/app-development/processes-and-threads.html)
* [Scheduling](https://www.bottomupcs.com/scheduling.xhtml)
* [Fork and exec](https://www.bottomupcs.com/fork_and_exec.xhtml#d0e5711)
* [The shell](https://www.bottomupcs.com/the_shell.xhtml) Make sure you understand that the shell (or terminal) is a different program (a different process) than the program you launch from it (e.g., a Node program).
* [Elements of a process](https://www.bottomupcs.com/elements_of_a_process.xhtml) A bit too detailed, just skim this to pick up the terminology. Process id's (pids) stack, heap. You can bail out of the article when it starts talking about file descriptiors.
* [Search path](https://www.decf.berkeley.edu/help/unix/searchpath.html) Just skim this and be aware that there is a concept of a "search path" which determines how the shell will find the executables you attempt to run. You can see your path by typing `echo $PATH`.

## Computer memory

* [Memory in a computer](https://www.cs.utah.edu/~germain/PPS/Topics/memory_layout.html) Quick overview.
* [Memory lifecycle and garbage collection in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) If you allocate and then discard lots of objects, it can cause a noticeable performance hit, as both the allocation and the garbage collection costs CPU time.

## Variables and data types

* ["What is Computation"](https://www.youtube.com/watch?v=ytpJdnlu9ug#t=29m23s) This is a segment from a great MIT intro to CS video. Watch ~5 minutes from the jump point. (Actually, if you can spare an hour, or 30 minutes at 2x speed, this whole video is really solid!) Based on Python but applicable to JS as well.
* [Introduction to variables and types](https://en.wikiversity.org/wiki/Introduction_to_Programming/Variables) Decent intro.
* [Types in Java](https://docstore.mik.ua/orelly/java/langref/ch03_01.htm) Primarily read the first two sentences for a succinct definition of type! Then skim the rest to see that all languages, not just JavaScript, describe their types in pretty much the same way.
* [Types in Golang](https://www.golang-book.com/books/intro/3) Another quick overview, well written. Nominally regarding the Go language, but worth a skim as it will continue to build up your intuition for how fundamental types are to all languages.






