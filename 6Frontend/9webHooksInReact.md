# Hooks 
* In React, hooks are functions that allow you to use state and other React features in functional components.

- useState()
    - used to make state variables in functional components
    - we canno't directly change state before rendering component
- useEffect()
    - Detect change in state and runs callback 
    - multiple state change in single event runs callback once
    - Three ways 
        - No second parameter(callback runs on any state change)
        - [] second parameter(once called on component mount)
        - [state1,state2,...] second parm(callback is called on these state change)



# Designing components 
* Component based CSS
    - create file on same folder where component is
* Global CSS 
    - src/assets/css/main.css
    - import on main.jsx