# events 
- emit/ create/ trigger/ fire
- listen -> listening created events

* Two types of events 
- client-server 
- server within the server #################
    -> background events 

=> Event is a call/trigger that generates code and there's listener somewhere that works on that event.


* when to create events 
    -> eg in order create routes we need to send notification (email/sms) to customer, admin, seller
    -> Implementing this before res will create deleay
    -> In such cases we emits events and listeners somewhere will receive and they process in background

* events may stay in queue or fail so we make optional things events that will execute in background

* similar to events we can also use
# queue
# Cron JOB(Automated System) 
    - eg birthday wish done by code running periodically in server



# using events in express 
- We need to use events form Node.js
    - const EventEmitter = require("node:events") -> import
    * const myEvent = new EventEmitter()           -> create obj
    - myEvent.on("eventName",(payload)=>{})   ->event listen ie .on(eventname,callback)
    - myEvent.emit("eventName",{name:"Test"}) ->event emit ie .emit(eventname,payload)




# rule of event -> One generating should be one to listen
- So we bind object of event in express file to req( binding objects binds reference)  
- We use middleware for that eg> app.use((req,res,next)=>{req.myEvent = myEvent; next();})
- now we can emit from any other routes controllers

# We can move code to event.config.js
    - import express, create app
    - ... code to bind event and listen
    - module.exports = app;

    * in express file, import event from this file and 
    - before mounting route > app.use(event);


----------------------------------------------------------------------------------

* Previously we understood serverside events 
##  NOW CLIENT SIDE EVENTS
- Here server can pass call to client 
- It is so called bidirectional communication
- We have to use Socket Programming for this 

* Steps
- npm install socket.io
- now we write socket app and listen it on node server
- index.js > 
    - import {Server}
    - create io = new Server(server);
    - io.emit("event",{})  AND io.on("event",()=>{}) -> to emit and listen
    * There is default event(for new conn)>
     io.on("connection",(socket)=>{
        // define events here by io.on...
    })

    * Now there's client side left where we do emit events
    * In here anyone can create and listen event unlike server events

* Here socket is within our node server, we can make it standalone 



# one to one communication vs broadcasting
- sender to reciver [io.emit("event",{data}) and io.on("event",(data)=>{})]
- sender to all clients > use socket instead of eventname in io.on