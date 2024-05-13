# Routing in React App
* Controls not only URL but also structure of React App.
1) npm i react-router-dom
2) src/router/routing.config.jsx   -> seperate folder for routing(main.jsx can be used as well)
3) import and use <Routing/> in main.jsx
4) use <BrowserRouter>(working with API's), Otherwise <HashRouter> can be used as well
    - <Routes> // for grouping route
        <Route path="/" element={}>
        <Route path="/product-detail/:slug" element={}> //dynamic route
    </Routes>
    - write common comp. like <Navbar/> before <Routes>, <Footer/> after </Routes>
5) <Link>, <NavLink> and useNavigate() for navigation()/<Navigate to="">



# 404 page
- pages/common/error.page.jsx
- make route <Route path="*" element={<ErrorPage/>}> before </Routes>

##TASK ADD ROUTING TO COMPONENTS MADE IN PREV. TASK




## Parent-Child ROUTE (Nested Routes)
- <Route path="/category/:slug/" element={<ParentViewLayout/>}> 
    <!-- routes here are child routes donot start path with / -->
    <Route index element={<ChildDetailPage/>}>
    <Route path=":childCat" element={<ChildDetailPage/>}>
</Route>

# Layout 
* Write layout on parent component 
* <Outlet/> in place where it's child are to be loaded




## receiving Params and query string from route in a Page
 - const params = useParams();                    // to get params
     - now using useEffect(()=>{},[params]) we do API calls

 - const [query,setQuery] = useSearchParams();   // to get and set querystring
    - we canno't directly use setQuery() in component(infine re-rendering)
    - instead on events we use it
    - now using useEffect(()=>{},[query]) we do API calls
    - API call firsttime on mount is done using empty dependency on useEffect



#SB Sdmin Free Bootstrap Admin Theme
- basic templates for cms