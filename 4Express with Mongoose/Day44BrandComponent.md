Brand Modeling :
title, slug, description, image, status, createdBy

* slug -> Apple brand for eg > apple_brand OR apple-brand, should be unique and only alphanumeric characters

* We use package to generate slug -> npm i slugify 
    - payload.slug = slugify(request.body.title,)


# making brand Comp. copypaste and edit banner Comp.
- brand.model.js
    - change banner BY brand & Banner BY Brand  AND add few fields like(slug,description)

- brand.router.js
    - replace banner/Banner with brand/Brand

- brand.validator.js
    - replace, remove url & add description field

- brand.controller.js
    - replace, 
    - brandCreate -> modify req trans func
    - listAllBrands -> remove url filter
    ...
    - listHome(edit to add pagination) -> add filter, page, limit and calculate skip as (listAllBrands) and edit listAllData with respective values

    * add a route
    - router.get("/slug/:slug",brandCtrl.getDetailBySlug) -> to get products acc. to brand slug


- brand.service.js
    - replace, 
    - changes in transformCreateRequest() -> append data.slug using 'slugify' pkg