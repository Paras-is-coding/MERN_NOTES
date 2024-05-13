# SB admin(Integrating admin layout to our project)
- Is a template for admin written on bootstraps
- Download template and extract ZIP file
- pages/layout/cms  > add cms layout for admin here also copy css file and rename
    - cms.layout.jsx, cms.layout.css
    - add css and copy paste body edit jsx syntax 
    - import JS either on layout file OR on main.jsx(import 'bootstrap';)


# events
- Handle click event on menu bar 

### Permission Check Component
- takes accessBy and Component as props
- If loggedIn and has role, returns Component
- now Component that needs check there we'll use PermissionCheck comp. and pass props required here
