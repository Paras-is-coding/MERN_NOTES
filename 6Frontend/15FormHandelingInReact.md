## 
* We've designed forms using some Form components
* Now we've to do 
    - Form validation and 
    - Form Handeling

# Handeling Form
- receive info of fields from onChange event(name,value, and more)
- store values in state 
- set values of fields the respective state values
* make handleSubmit method onSubmit event to form

# Valitation
* NOW WE HAVE TO VALIDATE DATA WE'VE COLLECTED FROM FORM
    - Custom Validation
    - Package based Validation
        - react-hook-form
        - formik
        - BOTH provide validator WE"LL use YUP along with react-hook-form

** react-hook-form
- npm i react-hook-form
##we don't have to maintain states to store form data after using packages
- implementing it in login component
    - const {register, handleSubmit, formState:{errors}} = useForm();
        - use register() in input tag as, {...register("name",{required:true})}
        - use handleSubmit(loginSubmit) in onSubmit of Form 
            * loginSubmit(eg) will get (data) ie all input values as object
        - errors variable will give us object or errors occured

- Either we can validate in Input field using register() OR 
    we can use Yup, Zod, Joi and Superstruct for Schema Validation.







# React-Toastify 
- To show generic messages 
- npm i react-toastify

* we could add messages on specific container or at global 
    - For global we add <ToastContainer/> in Routing page before BrowserRouter
    - import "react-toastify/dist/ReactToastify.min.css"
- Now use in component 
    - import toast and use
    - you can setup theme in container or toast itself