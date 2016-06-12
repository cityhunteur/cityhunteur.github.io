---
layout: post
title: Technology stacks
subtitle: Stacks I use at work and experiment with on personal projects
---


I've used many tools and technologies over the years either at work or on personal projects. I find it ironic that most of them are now simpler and easier to use than it has ever been. They seem to be easier to adopt and gets less in the way of building stuff.

Let's start with the main technology stacks I am currently working on.

## Java / Java EE

Yes, I also maintain a huge monolith built in Java. This thing is more than ten years old. It has a mix of EE components and Spring. It runs on an application server against an SQL database in production, both from IBM.  RabbitMQ handles messaging among the different modules.

As you can imagine, this stack is rather old and hard to maintain. Luckily, a lot of refactoring over the years has eased the process and there is a solid number of tests. The old legacy UI is challenging, to say the least. Remember JSP and JSF?

## Node.js / AngularJS / Twitter Bootstrap

That was my first exposure to a more modern UI stack and it was a breath of fresh air. The development workflow and tooling are a lot nicer to use. Although I used node during development, the UI still talks to the Java monolith via a REST API.

I used Grunt, Gulp, Bower, Karma and Jasmine. And also used Express and Scalatra for stubbing purposes. Once, you get your head around those tools, the whole stack seems to come together quite well. It also allowed clear separation of the UI and backend development. Which if managed well, can be quite useful.

## Scala / Akka / Scalatra

This is still my favourite stack on the JVM. I find Scala to be concise and a great language to program in. It also gave me the opportunity to practise some functional programming in the process. I've not had a chance to experiment with Java 8 yet but I will choose Scala anytime for my JVM based development. Akka and the Actor
model was fascinating and gave me a different perspective to concurrency. I find it easy to think of Akka as a message broker among processes (actors) within a single JVM. In fact, RabbitMQ is implemented in Erlang which uses the actor concurrency model. I guess it gets confusing when you start using Akka remoting. Scalatra was straight forward. It fits in well if you need to build a UI on top.


## React.js / Relay / GraphQL / Redux / Node.js / Golang

I'm still experimenting with this stack. My experience so far has been great. No more of those heavyweight general purpose frameworks that always tend to get in the way. Each of these JavaScript libraries tackles a specific problem and does it well. But there is still a bit of a learning curve. Especially if you don't do a lot of front-end development using JavaScript. I must admit the JavaScript community can be a bit overwhelming at the beginning. There are so many libraries, blogs, and different best practices.  I guess, that's what the JavaScript fatigue people has been referring to on the web. I'm not sure what it exactly means, that it is a pain to learn new things? Some will say it's a good thing to have such a large community support.  

As much as I like the idea of universal apps, I favoured Golang for the backend as I am quite keen to learn it. And it feels more robust for server-side development than JavaScript. The API documentation and guides for it on the web was quite good. They are easy to digest. It's too early to comment, but I like how succinct the syntax is, in my opinion, this is how code should look like. That's why you need developers to write code lol!
