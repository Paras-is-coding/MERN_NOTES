- Validate login info using yup
- call login API 
- get response token, refreshToken and store them on localStorage on loginProcess

* NOW
- based on the user type we need to redirect the user 
- For that another API call of '/me' route with {auth:true}(ie set token to header)

* Finally we also have to make sure that if user is already loggedIn and 
still clicks on [login] we have to redirect to respective pannel


# PermissionCheck page
- completed permissionCheck component that takes component to be displayed and 'role' as props
* - set loading
  - if localstorage has _au(ie token) and we get user through API call using token & role is as prop show component 
  - else handle token not found OR invalid token OR role invalid respectively


