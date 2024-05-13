* making ER diagrams
- Before coding we always should make ER diagrams after setting datastructure it's easier to implement 
- https://app.diagrams.net/
- https://dbdiagram.io/home


* Firstly we try to complete non related modules like
Banner
    image
    url
    title
    status [active,inactive]
    createdBy 
        -> It is used for dispute resolution later
        -> We'll link foreign key here using mongoose
Pages
Blogs
 these are not related with products, but maybe for marketing, SEO, etc



 # Starting Banner module
 - app/banner/
    - banner.model.js          * Firstly create BannerModel
        
    - banner.router.js         * Then create bannerRouter and mount to main router
        - ALSO create dirSet middleware before this for fileupload
        - In router we call various middleware and finally controller middleware 

    - banner.controller.js     * We'll do DB operation here 

    - banner.validator.js      * create bannerSchema for Validator

    - banner.services.js       * Code like transform request comes here from controller


# creating banner/ storing in DB
- banner.services.js/storeBanner(payload), call from controller
    - create banner object using BannerModel(payload) class, insert and return
- send response from controller


** Working on FrontEnd we do two things : CMS(CRUD operation) & Home page and other pages(Just Fetch data)

# listing (Read)
- .get(CheckLogin, CheckPermission('admin'),bannerCtrl.listAllBanners)
- listAllBanners = (req,res,next)
    - search, sort, paginate(sending data in chunks)  _if required OR send all data
    - list = bannerSvc.listAllData()

* For searching with filter
    - send payload through query params eg_ ?search=one
    - make object filter for searching query with filter, pass it while fetching banners

* pagination _ not returning all data instead in chunks
- we need 3 things :
    - page = 1(default frontend sends it)
    - limit = 15(default)
    - total = bannerSvc.countData(filter)
    - skip
- pass offset(skipvalue) and limit, use respective functions while fetching data
    
