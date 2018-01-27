The following is intended to be descriptive, not prescriptive.

The idea is not to slavishly follow exactly what you see here, it's to get a sense of the mental models of system components that your interviewers and future teammates have in their minds.

I.e., the exact names of your components and directories do not have to match the names here, but _something_ broadly matching what you see here needs to be easily visible in your code.

## "Logical" outline of client-server structure

These blocks represent logical groupings and boundaries among your system components.

<img src="https://i.imgur.com/VPBLJtC.png" >

## "Physical" outline of client-server structure

I.e., the directories that you'd "physically" create to house different types of system components.

```
Client
-- "public" deployment dir
---- html
---- css
-- routing (optional, but SPA's have this)
-- view components + tests
-- actions + tests
-- pure-business-logic modules + tests
-- store
-- utilities (generic helper logic -- json/csv/normalization stuff)

Server (i.e., your app server)
-- main entry point (index.js/app.js or whatever)
-- routing
-- actions (aka "controllers" in older-school MVC style)
-- pure-business-logic modules + tests
-- models (if there's a db server)
-- utilities

DB (n/a for many mini-apps)
-- schema
-- migrations
```