### NOTE: This project demonstrates the basic implemention of microservice architecture in Node.js

## What is microservice ?

- Microservices are small, independent services that work together to form a larger application.
- Each microservice is responsible for a specific task and communicates with other microservices via APIs.
- This approach to application development allows for greater flexibility and scalability, as each microservice can be developed, tested, and deployed independently.

## Modules

- In this project, I have created three servers: 1. One server to handle communication. 2. Two servers for the User Service and Product Service, respectively.

- The main server act as a communicator.

## What is a communicator ?

- A communicator acts as a bridge or intermediary that facilitates communication between different services.
- Since microservices are designed to operate independently, they often need to interact with other services to complete a larger business operation.
- The communicator is essentially a service integration layer or client that ensures smooth and structured communication.

## Key Roles of a Communicator:

- Communication: Facilitates interaction with other microservices through APIs.
- Request Handling: Sends requests to and receives responses from other services.
- Decoupling: Abstracts the communication logic to maintain service independence.
- Error Handling: Ensures resilience by handling communication failures.
- Security: Manages secure communication via authentication and encryption.
- Data Transformation: Converts data formats for seamless integration.

## Implementaion of Microservice Architecture in Node.js

- This project aims to illustrate how to implement microservice architecture.
- Note that there is no single "textbook" way of implementing this; typically, servers are divided based on specific services.

## Additional Notes

- To simplify communication between the services, I have used Axios as the HTTP client.
