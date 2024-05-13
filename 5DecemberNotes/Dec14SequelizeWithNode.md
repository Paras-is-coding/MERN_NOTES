# What if we want to use some other Database servers
- Like PostgreSQL is used with Node.js Server applications OR MySQL also

- In Shared Hoisting Server MySQL is default and also provide PostgreSQL

## DB server setup and Structure define
---- For MySOL --- 
In Windows:
1. Download MySQL Community Server(run)
2. same



---- For PostgreSOL Server --- 
In Windows:
1. Download it(run)
2. like MongoDBCompass, use DBeaver for accssing DB 
    - Database > SQL > select any > password(entered in installation) and textconnection/finish > now create DB(Schemas>puhlic>Tables-create | use SQL scripts)

** SO WE CAN CREATE TABLES ON SERVER OR FROM MIGRATION FILES

## Connection using sequelize
- for switching DBs we create migration files 
- We use package like Sequelize for DB connection, migration and more
STEPS: 
- install 
- sequelize.config.js
- index.js > require('./sequelize.config.js')


### Creating migration
- npm i sequelize-cli 
- npx sequelize-cli migration:generate --name UserTableCreate
- now write table creation and drop commands in file
- now run migration using 'npx sequelize-cli db:migrate'
    * config/config.json > add configurations here

### Using migrations creating models
- app/sequelize/user.model.js > use 'sequelize' from sequelize.config.js
### Controllers are same, service files
- app/sequelize/user.service.js


Note: 
- Swaggar - for api documentation
- postman - can make documentation here also