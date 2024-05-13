* .eslintrc.cjs file has aggregation of ES versions and project specific rules

* parent function call from child 
    - form from set-password.page is made seperate comp. set-password.component
    - there we collect and validate form data using 'react-hook-form' 
    - use that component in page and pass function as prop
    - onSubmit of form trigger the function received as prop


# Validation
1) We can apply few HTML5 validations in register("name",{}) func on second parm.

2) Another way we get each field values and make our custom validations and send

3) OR we can use validator on library where we're building form 

# Yup 
https://www.react-hook-form.com/get-started/#SchemaValidation
- It's used for schema validation in react-hook-forms
- install 
- import yupResolver, useForm({resolver:yupResolver(schema)}), * as Yup
- create schema 


***We can use other validators for schema defination as well 



