* NVM -> when we have to work with diff. version of node according to project

* Docker -> Containerized Application(We define versions of node, mongo, etc kind of complete server setup is done in docker file, we install docker instead of node and our project is run through docker).


# Product CRUD
- create product model at product.model.js
- change category.router.js to product.router.js
    - change single to array for uploading images
- change category.controller.js to product.controller.js
- change category.validator.js to product.validator.js
    - change validation according to product schema
- change category.service.js to product.service.js
    - change transform for multiple images 
    - set category, brand and afterdiscount in transformation
    - samething for updatetransform, make sure not to delete prev imgs




