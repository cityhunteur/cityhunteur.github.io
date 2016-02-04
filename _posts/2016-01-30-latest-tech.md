---
layout: post
title: Technology stacks and tools I use
subtitle: Iteration 1
---

I've used many tools and technologies over the years either at work or on personal projects. I find it ironic that most are now simpler and easier to use than it has ever been. They seem to be easier to adopt and gets less in the way of building stuff.

Let's start with the main technology stacks I currently work on.

# Java / Java EE

Yes, I also maintain a huge monolith built in Java. This thing is more than ten years old. It has a mix of EE components and Spring. It runs on an application server against an SQL database in production, both from IBM.  RabbitMQ handles messaging among the modules.

As you can imagine, this stack is rather old and hard to maintain. Luckily, a lot of refactoring over the years has eased the process and there is a solid number of tests. The old legacy UI is challenging, to say the least. Remember JSP and JSF?

# Node.js / AngularJS / Twitter Bootstrap / Java

That was my first exposure to a more modern UI stack and it was a breath of fresh air. The development workflow and tooling are a lot nicer to use. Although I use node during development, the UI still talks to the Java monolith via a REST API. I used grunt, gulp, bower, express, scalatra, karma and jasmine. Express and scalatra are there for stubbing purposes. Once, you get your head around those tools, the whole stack seems to come together quite well.

# Scala / Akka / Scalatra

This is still my favorite stack on the JVM. I find Scala to be very concise and a great language to program in. It also gave me the opportunity to practise some functional programming in the process. I've not had a chance to experiment with Java 8 yet but I will choose Scala anytime for my JVM based development. Akka and the Actor
model was fascinating and gave me a different perspective to concurrency. Although it might not be strictly true, I find it easy to think of Akka as a message broker among processes (actors) within a single JVM. In fact, RabbitMQ is implemented in Erlang which implements the actor concurrency model. I guess it gets confusing when you start using Akka remoting. Scalatra was straight forward and gave me enough of a web framework to rapidly build a UI. It complements this stack naturally if you need a UI.

# React.js / Relay / GraphQL / Redux / Node.js / Golang

I'm still experimenting with this stack. My experience so far has been great. No more of those heavyweight general purpose frameworks that almost always tend to get in the way. Each of these JavaScript libraries tackles a specific problem and does it very well. There is a bit of a learning curve, however. Especially if you don't do a lot of front-end development using JavaScript. Probably, that's what the JavaScript fatigue people has been referring to on the web. I'm not sure what it exactly means, that it is a pain to learn new things? ;-) I must admit the JavaScript community can be a bit overwhelming at the beginning, with so many libraries, blogs, and different best practices.

For some reason, although I'm using JavaScript server side, I wanted to use something that felt more robust server side and decided to give Golang a go ;-) The API documentation and guides for it on the web seem quite good. It's too early to comment, but I like how succinct the syntax can be, in my opinion, this is how code should look like. That's why you need professional developers to write code ha!
