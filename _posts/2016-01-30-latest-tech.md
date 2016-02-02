---
layout: post
title: Technology stacks and tools I use
subtitle: Iteration 0
---

I've used many tools and technologies over the years either at work or on personal projects. I find it ironic that most are now simpler and easier to use than it has ever been. They seem to be easier to adopt and gets less in the way of building stuff.

Let's start with the main technology stacks I currently work on.

# Java / Java EE

Yes, I also maintain a huge monolith built in Java. This thing is more than ten years old. It has a mix of EE components and Spring. It runs on an application server against an SQL database in production, both from IBM.  RabbitMQ handles messaging among the modules.

As you can imagine, this stack is rather old and hard to maintain. Luckily, a lot of refactoring over the years has eased the process and there is a solid number of tests. The old legacy UI is challenging, to say the least. Remember JSP and JSF?

# Node.js / AngularJS / Twitter Bootstrap

That was my first exposure to a more modern UI stack and it was a breath of fresh air. The development workflow and tooling are a lot nicer to use. Although I use node during development, the UI still talks to the Java monolith via a REST API. I used grunt, gulp, bower, express, scalatra, karma and jasmine. Express and scalatra are there for stubbing purposes. Once, you get your head around those tools, the whole stack seems to come together quite well.

# Scala / Akka / Scalatra


# React.js / Relay / GraphQL / Redux / Node.js / Golang
