# Working with register page 
* Make UI with name, email, role, image
- name, email fields are similar, handle using react-hook-form and yup(validation)
- For role, dropdown field we use react-select plugin for multiple select designs
    - npm i react-select
    - look doc ( import, options ) and apply custom onChange




* For image we do manual validation(using onChange) as we don't know what file content is 
    - so we check the filesize and ext AND then append to react-hook-forms
    - we use setValue and setError(another func. from useForm) to append
    - we make a Image section for thumbnail display ** 




# FORM FIELDS 
- Could be controlled and uncontrolled 
- For example when we're default setting values on fields while editing it's controlled , IN THIS CASE we can use useController()