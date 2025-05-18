---
title: Orchestration vs Choreography in Microservices
subtitle: Coordinating services with Kafka, SQS/SNS, Pub/Sub and Temporal
publishDate: 2016-06-04
---

Microservices architectures encourage small teams to own focused services that work together to solve larger business problems. How these services coordinate their work has a big impact on reliability and maintainability. Two common patterns are **orchestration** and **choreography**.

## Orchestration

In an orchestrated system, a central service tells each microservice what to do and when to do it. This approach is straightforward: a single orchestrator manages all the steps in a workflow.

**Pros**

- Easier to understand the overall flow because one service contains the process logic
- Makes it simpler to add or remove steps as requirements change

**Cons**

- The orchestrator becomes a single point of failure and can grow complex
- Tight coupling between services and the orchestrator can make changes risky

Popular implementation options include message brokers like **Apache Kafka** or cloud offerings such as **SQS/SNS** and **Google Pub/Sub**. These tools route messages between the orchestrator and participating services. Workflow engines like **Temporal** go further by providing long‑running orchestration capabilities with built‑in retry and scheduling logic.

## Choreography

With choreography, each service reacts to events produced by other services. No single service has the full picture; instead, the overall workflow emerges from these interactions.

**Pros**

- No central dependency means better resilience and scalability
- Each service can evolve independently, following its own lifecycle

**Cons**

- Harder to trace and visualize the full workflow
- Potential for unexpected event chains if service interactions are poorly defined

Event streaming platforms such as **Kafka**, **SQS/SNS** and **Pub/Sub** are popular here too. Services publish events to a topic and others subscribe to events they care about. Temporal can also be used to coordinate event‑driven interactions in a more distributed fashion by running activities in separate workers.

## Saga pattern

Long‑running business processes often require multiple services to update data in different databases. A classic problem is ensuring consistency when one step fails. The **saga pattern** addresses this by splitting a transaction into a series of local transactions. If any step fails, compensating actions undo the preceding steps.

Both orchestration and choreography can implement sagas. An orchestrator might call each service sequentially and trigger compensating actions if something goes wrong. In a choreographed setup, services emit events when their local transactions succeed. If a service encounters a failure, it emits a compensating event so other services can roll back.

Sagas help maintain consistency across many microservices without needing a distributed transaction manager. They allow each service to keep its own data and still participate reliably in larger workflows.

Choosing between orchestration and choreography depends on how much control you need versus how loosely coupled your services should be. Many teams start with orchestration for clarity and then gradually introduce more choreography as systems grow. Tools like Kafka, SQS/SNS, Pub/Sub and Temporal can support either style—just in different ways. The saga pattern ties everything together by ensuring that failures are handled cleanly, keeping your microservices in sync no matter how you coordinate them.
