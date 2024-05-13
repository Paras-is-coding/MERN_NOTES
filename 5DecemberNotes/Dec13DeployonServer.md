

# Deploying on Server 
- If we've used Typescript, we have to build then deploy 

- In JS, 
    - It's like we're given folder in some device where we've to clone our code. We use terminal not GUI. 
    

NOTE: # We do not use shared-hosting Servers for Node applicaiton.(do not allow other ports like mongodb using atlas server would be blocked)
    # So we use VPS(Virtual Private Server) (is costlier)
    # Alternative of VPS > We use SQL Servers(MYSQL or Postgress), for that we use sequelize or [Prisma or TypeORM - for Typescript]

# Requirements
- we use pm2 package(for continuous npm start ), So we don't use nodemon in server 
- we've to define engines setup (version of node and npm)
- IN index.js file, 
    * port 3000 is for local(in server its 80 or 443 unless there're custom ports) 
    * no need to pass host ie 'localhost'
- config > If there are statis configurations, read from env

-- Free resources to setup server environment -- 
- replit.com: 
> create repel(Node.js, title OR (Import form github as well)) 
> package.json(copypaste)
> uploadfolder(src,locales(Opt) and index.js) 
> for env(add on Secrets)
> use shell to run 'npm install' for node_modules generation
> open index.js file and run (BUTTON) 
> Now it gives us a URL 
> Now check through postman(change env url), mongodb also should be of live(not local)

- Other servers: Netlify, etc

-- Free Domain setup -- 
- register.com.np

