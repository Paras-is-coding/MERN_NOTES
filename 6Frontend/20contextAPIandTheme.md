
ContextAPI
passing props to deeply nested comp. is done by passing through every outer components

* What to do when we want to store some state to be accsible to every pages ? 
    If we had some global storage, store and get when needed

- ContextAPI _ state management for React only
- Redux _ react-redux - redux-toolkit(RTK)
- zustand

** now understanding working of context API


STEPS: 

STEP 1 : WE'VE TO CREATE A CONTEXT _________________________________

src/context/
UserContext.js

const UserContext = React.createContext(), 


STEP 2: THROUGH CONTEXT WE'LL CREATE A PROVIDER_______________________

UserContextProvider.jsx ,
- has function that gets props {children}(any component and display as it is) ,
- there we can set states and methods to change states
- func returns <context.Provider value={{states or functions to set states}}> {children} </context.Provider>
- Now return ContextProvider 


* You can also take context and make provider in App.jsx


* We'll wrap components with provider that want access of that, 

NOW wrap the App.jsx or Main.jsx with provider (all components inside them will get access to the values/data in context)


STEP 3: USE THE DATA IN CONTEXT USING useContext(<contextname>)_________________

components/Component.jsx

- storing data
const {<setState>} = useContext()
Eg: setUser store user info in context

- getting data
Eg: const {<state>} = useContext()




# Another use of contextAPI

* For Webstorage access(read,write and other access) we need to ask for permission from client
* Webstorage - LocalStorage, SessionStorage, Cookie and ClientSideDB
- Cookie - Max(50 cookie), Maxsize(200KB), path dependent(path and subpath accessible), selfDestroy, string format __ less storage space __
- LocalStorage/SessionStorage - 5MB(accumulated storage), domain dependent, string, never destroy(unless cleaned) 
- Various ways to work with them look at internet

* We can store states in LocalStorage(OR any WebStorage) from contextAPI for persistance of state


** MORE OVER WE CAN ALSO USE Web SQL AND Firebases FOR STORAGE.