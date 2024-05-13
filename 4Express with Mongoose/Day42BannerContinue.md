# edit banner

* getBannerById 
- to get banner details
- .get route > checkLogin, CheckPermission("admin"), bannerCtrl.getDataById

* updateBannerById
- to update banner 
- .put/patch route > checkLogin, CheckPermission('admin'),dirSet,uploader.single('image'),Validator(BannerCreateSchema),bannerCtrl.updateById
- controller> getBannerDetail, transformRequest, updateBanner and if delete old image if image exist in payload

* deleteBannerById
- create delete route, deleteBanner and associated image

* home route for getting all banners
- create'/home' route at top of bannerRouter
