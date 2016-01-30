---
layout: post
title: Technology stacks and tools I use
subtitle: Iteration 0
---


I've used many tools and technologies over the years either at work or on personal projects. I find it ironic that most are now simpler and easier to use than it has ever been. They seem to be easier to adopt and gets less in the way of building stuff.

Let's start with the main technology stacks I am currently exposed to.

# Java / Java EE

Yes, I also maintain a huge monolith built in Java. This thing is more than ten years old. It has a mix of EE components and Spring. It runs on an application server against a SQL database in production, both from IBM.  RabbitMQ handles messaging between the modules.

As you can imagine, this stack is rather old and hard to maintain. Luckily, a lot of refactoring ease the process and there is a solid numbers of tests. The old legacy UI is challenging to say the least. Remember JSP and JSF?

# Node.js / AngularJS / Twitter Bootstrap

That was my first exposure to a more modern UI stack and it was a breath of fresh air. The development workflow and tools are a lot nicer to use. Although I use node during development, the UI still talks to the Java backend via a REST API.
