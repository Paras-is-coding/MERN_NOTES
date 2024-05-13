# API Comparison: RESTful, GraphQL, and WebSocket

## RESTful APIs

- **Architecture:** REST is an architectural style with a client-server model and stateless communication.
- **Communication:** Standard HTTP methods (GET, POST, PUT, DELETE) are used to perform operations on resources.
- **Statelessness:** Each client request contains all necessary information; the server doesn't store client state.
- **Data Format:** Commonly uses JSON or XML for representing resources.
- **Scalability:** Known for simplicity and scalability, suitable for various applications.

## GraphQL APIs

- **Query Language:** GraphQL is a query language allowing clients to request specific data.
- **Client-Defined Structure:** Clients can specify the shape and structure of the response, reducing over-fetching.
- **Single Endpoint:** Typically exposes a single endpoint, enabling clients to request various data in a single query.
- **Flexibility:** Offers flexibility in data retrieval, allowing clients to get exactly what they need.
- **Real-Time Updates:** While GraphQL itself doesn't provide real-time communication, it can be combined with other technologies.

## WebSocket APIs

- **Full-Duplex Communication:** WebSockets provide a full-duplex communication channel over a single, long-lived connection.
- **Real-Time Communication:** Suited for applications requiring low-latency, real-time updates.
- **Push Model:** The server can push updates to clients without waiting for a request.
- **Continuous Connection:** The connection remains open, allowing bidirectional communication.
- **Protocols:** Can use WebSocket protocol (ws://) or its secure version (wss://).

## Similarities and Differences

### Similarities

- **Web-Based:** All three are used in web development to enable communication between clients and servers.
- **HTTP Protocols:** RESTful and GraphQL APIs often use HTTP as the underlying protocol, while WebSocket APIs can use the WebSocket protocol over HTTP.

### Differences

- **Communication Style:** RESTful and GraphQL follow a request-response model, while WebSocket enables bidirectional communication with a continuous connection.
- **Data Retrieval:** GraphQL allows clients to specify the structure of the response, reducing over-fetching, whereas RESTful APIs return a fixed structure.
- **Use Cases:** WebSocket is well-suited for real-time applications, while RESTful and GraphQL APIs are suitable for a broader range of scenarios, with GraphQL excelling in scenarios where precise data retrieval is crucial.


## GraphQl basics
- **Schema:** GraphQL uses a schema to define the data types and operations that can be performed.
- **Queries:** Clients use queries to request specific data from the server.
- **Mutations:** Used to modify data on the server.
- **Subscriptions:** Allows clients to receive real-time updates when data changes.

## Using GraphQl
- we use graphql-http(for express integration) and graphql package
- goto > npmjs.com/package/graphql-http

- STEPS 
    - install above packages
    - express.config.js(before 404 handle)
        - build schema(we'll bind in app) for query and mutation
        - bind with express app > app.use('/graphql',createHandler({schema}))
    - test using postman
