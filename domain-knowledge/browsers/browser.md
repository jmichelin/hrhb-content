# Browsers

## How pages load

* [How webpages are rendered](http://frontendbabel.info/articles/webpage-rendering-101/) - just read the first half to get a sense of how much complex processing gets triggered when you change the DOM
* [How browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) - just skim the diagrams to get a feel for how "it's a lot of trees under the hood"
* [How a web page loads](http://gent.ilcore.com/2011/05/how-web-page-loads.html) - Your takeaway is to "avoid blocking"; see this short post for why and how.
* [Document loading events](http://www.breck-mckye.com/blog/2014/04/document-loading-and-DOM-lifecycle-events/) -- Know the difference between `DOMContentLoaded` and `window.onLoad`, using one of them is often a rookie mistake
* [max parallel connections per hostname](http://blog.olamisan.com/max-parallel-http-connections-in-a-browser) - Be aware that as the page is being rendered and secondary resources such as images are being fetched, browsers send parallel requests to each hostname.

## Dev tools

* [Chrome Dev Tools course](http://discover-devtools.codeschool.com/) -- Video-based, which I don't like because it's slow, but friendly and reasonably comprehensive. Also has little quizzes. However you learn them, you absolutely should be highly familiar with all the tabs in Chrome dev tools, and use some of those tabs frequently for quick prototyping, sanity-checking and debugging. This is true even if you're more of a server engineer, you'll still look at traffic on the network tab and check cookie contents, etc.
