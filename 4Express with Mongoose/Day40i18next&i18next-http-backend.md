# translation 
- Two types of translation
    - content localizatin eg _ ecommerce nepali/ english content

    - Notification, messages etc translation 
        - i18next and i18next-http-backend > install both > import i18next and HttpApi from them resp.
        -  init , locales/en/en.json/{"msgname":"msg"} and more( look at documentation )



# using sql servers 
- working with mongodb, mongoose is ODM provider
- sometimes we may have to use sql servers (postgres, mysql) so instead of mongoose we've to use ORM providers

- based on language (JS or TS)
    - if using JS > sequelize (ORM provider)
    - if using TS > TypeORM 
    [look documentations for using them when needed]

# auth module completed
- At this point of time auth module is completed and in most of projects it'll be same
- After this we'll work on project specific things 