This ["Anatomy of a System Design Interview"](https://hackernoon.com/anatomy-of-a-system-design-interview-4cb57d75a53f) article is a good overview of some steps you can follow: requirements gathering, interface definition, data model definition, high-level design, low-level design for some components, rough capacity estimation, and identifying and resolving bottlenecks.

Let's break down further what to do in what order.

## Don't scale right away!!!

First things first: don't think about "scaling" the system immediately.

You can only analyze scaling while looking at the specifics of a workflow.


## Identify the key object(s) (nouns)

All systems have users, sessions, authentication, tracking, that sort of thing.

Identify the system nouns that are inherently and necessarily different from other systems, due to what this system does.

* Venmo: Payment
* AirBnB: Property, Booking
* Slack: Message
* Reddit: Board (subreddit), Post, Comment

## Identify the key role(s)

All systems have users, but those users will have roles.

* Venmo: Payer, Payee
* Airbnb: Owner, Guest
* Slack: Sender, Recipient
* Reddit: Board Moderator, Poster, Commenter

These user roles may or may not be worth modeling, but you can jot them down and be consistent in your usage of the role terminology as you talk about what's happening.

## Build up a use case around the key noun(s)

One of the above roles has a "felt need" that will be addressed by taking some action and having the system do something in response.

Identify that use case.

## Describe the use case in terms of input and output

In principle, this is just like the Single Function Problem (SFP) work that you've been doing.  Inputs transform into outputs.

In these system design cases, there's usually an overall input (often user input, or a user interacting with a user interface) and and an overall output (something that the user can see as the result of the action).

In between that overall input and overall output, there will be intermediate input-output sub-flows.

## Define data models

Draw a box or two to represent your data models (the key system nouns you defined above, including maybe 1 or 2 of the role-objects).

### Non-goals

* You are NOT making an E-R diagram.
* You are NOT trying to be comprehensive.

Keep it simple.

These data models represent both request/response payloads as well as hinting at a fuller database schema.

## Decide on component types for the core flow

There are only a handful of component types available to you to play with, in a high-level diagram that doesn't yet take into account scaling considerations:

* clients
  * web
  * mobile (native)
* web server
  * or, client API server
* internal service(s)
* 3rd-party service(s)
* persistent data store
  * relational
  * noSQL
* in-memory cache (e.g., Redis)
* message bus (e.g., SQS)

## Define API definition if necessary

Often this isn't actually necessary to spell out in much detail because the data model can serve as a request/response payload definition for the most part.

However naming the API endpoint is usually useful, at minimum.

And feel free to sketch out more about your APIs if you think it's important for your description of the flow.


## Outline the core flow

### Choose a diagram style
Use the diagramming techniques we covered to sketch out the core flow.

* sequence diagrams
* boxes-and-arrows flow diagrams with numbered steps

### Choose a flow style

* synchronous
* asynchronous / parallelized
* fan-out / split up jobs

## Consider the "10k qps" problem

Now, finally, you can think about scaling. QPS stands for queries-per-second.

### Guesstimate reasonable traffic amounts under high load

Just pick a number.  If you can't think of anything reasonable, use 10,000.

### "Tidal wave" the traffic load through your flow

Move through your defined flow, in sequence.

Consider the impact of high traffic on each component.

Consider the common failure modes below and see if they will manifest.

### Back-of-the-envelope numbers

Use "back-of-the-envelope" (rough) estimates of...

* how long it takes to process one task within one component, therefore
* what qps an instance of that particular component can handle, therefore
* how many instances are required, and/or
* whether or not this component is likely to fail.

### Common failure modes

Consider these common failure modes, observable behind-the-scenes (i.e., most of these are not directly user-facing symptoms).

* connections timing out
* response latency
* specific error codes such 40x or 50x
* throughput going down
* database error rate
* cache hit rate too low
* database locks
* memory use too high
* CPU usage too high
* storage usage too high / running out of storage

### A note on unintentional DDOS

DDOS stands for "Distributed Denial of Service" and it refers specifically to black-hat haxxors bringing down a site with a bunch of bots.

Most real-life "DDOS" is actually unintentional slamming of your site as a side effect.

Your app's clients are all, by nature, distributed, right?  There (hopefully) are a lot of them. Whatever they do, en masse, can pummel your servers.

If they fetch data all at the same time, it can be a tidal wave of traffic.

Watch out for the possibility in your flow that your clients might all do something at the same time. A typical culprit is HTTP polling that doesn't have any randomness built into it.


## Address your bottlenecks

### Split the load

* **Parallelize processing** wherever you can.
  * This might entail adjusting your workflow, but often more simply is horizontal scaling, as below.
* **Front your service with a load balancer and distribute traffic across multiple instances**.
* Consider which other components might be able to take some of the load from you.
  * Remember, in a design exercise, you can just **conjure up a new component** out of thin air, you aren't just stuck with the ones you originally had.
* Consider a **publish/subscribe (message-bus) architecture** where you put tasks on work queues.
  * Not every job has to be processed with a chain of HTTP calls...
  * Remember the example of the blueprint processing
    * First, do OCR, then
    * ... then in parallel, do
      * (a) auto-rotation
      * (b) search keyword indexing
      * (c) linked-sheet detection
    * This was cleanly implemented with a message bus / series-of-job-queues design

### Caching

* Use Redis or similar to **look up a pre-computed result**
    * Note how similar this is to "memoizing" computed results, which you are all familiar with.
* Use a CDN if the bottleneck might be traceable to a static asset
  * Images in particular can be heavy to load
  * ... and remember they can be UGC (user-generated content), so can be surprisingly voluminous (in number of items and individual size of items) depending on user behavior

Note: any time you cache, you have to think a bit about _cache invalidation_.  You may not have a sense yet of how to handle questions about that, but do what you can.

### Reduce the number of requests

* **Shift work upstream**
  * I.e., whoever is calling this component, maybe they can do some or all of the work instead.
  * This might be related to caching, above. The caller might cache your results.
  * If the traffic never reaches your bottleneck, then great.
* **Batch the work** so one request performs more tasks.

### Database

Generally, databases are already quite optimized (e.g., they invoke in-memory caching of their own, automatically). We'll assume for these high-level design exercises that the schema is not crazy-sauce, you'll be adding indexes routinely to speed up queries, etc.

You CAN split your queries across multiple databases if you have a truly large amount of data.

This is called "sharding" and it's an advanced topic. We can cover this later.

Selecting a different type of database is also possible but usually not really germane to the kind of system design interview that they'd give you at this stage. They're looking for systems thinking, not exhaustive knowledge that would support core technology choices that they're not going to ask entry-level engineers to make anyway.


