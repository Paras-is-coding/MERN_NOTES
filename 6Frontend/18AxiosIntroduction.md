
**Website Performance
To assess the performance of your website, follow these steps:

1. Open the browser console (Ctrl+Shift+J) and right-click on the reload button. Select "Empty Cache and Hard Reload."
2. Check the network tab (Ctrl+Shift+I, then navigate to the "Network" tab). Review load time, resources, and other relevant information. Use Ctrl+R for a second load.




## Axios Integration

To make your website dynamic, integrate it with your APIs using Axios.

### Backend Setup:

1. **Start Backend:**
   - During development, deploy APIs online, and obtain endpoints from tools like Postman or Swagger.
   - In a production environment, deploy backend code (usually stored in GitHub) on a server.
   * we can use localhost URL as well

### Frontend Setup:

1. **Install Axios:**
   ```bash
   npm i axios
   ```

2. **Call API Endpoint:**
   ```javascript
   import axios from 'axios';

   try {
     const res = await axios.method("endpoint", data, { options });
   } catch (error) {
     // Handle errors here
   }
   ```

3. **Cleanup:**
   - Store API endpoints in the .env file.
     - For Vite template:
       - In .env file: `VITE_` and access with `import.meta.env.VITE_`
     - For Create React App (CRA) template:
       - In .env file: `REACT_APP_` and access with `process.env.REACT_APP_`


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Industry Standard:
** Repository pattern -> API Calls is done through single file called repo

1. **Axios Configuration:**
Creates a reusable Axios instance with specified configurations like baseURL, timeout, headers, etc.

   Create `src/repository/axios.config.js`:
   ```javascript
   import axios from 'axios';

   const axiosInstance = axios.create({
     baseURL: '<API_BASE_URL>',
     timeout: 5000, // Set your preferred timeout
     timeoutErrorMessage: 'Request timed out',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json'
     },
   });

   export default axiosInstance;
   ```


2. **HTTP Service Class:**
Defines an HTTP service class that uses the Axios instance from the configuration to make POST requests. It includes a method for setting headers based on the configuration.

   Create `src/repository/http.service.js`:
   ```javascript
   import axiosInstance from './axios.config';

   class HttpService {
     headers;

     getHeader = (config) => {
       this.headers = {};
       if (config && config.file) {
         this.headers = {
           ...this.headers,
           'Content-Type': 'multipart/form-data'
         };
       }

       // TODO: Auth token add
       if (config && config.auth) {
         this.headers = {
           ...this.headers,
           'Authorization': 'Bearer '
         };
       }

     };

     postRequest = async (url, data = {}, config = null) => {
       try {
         this.getHeader(config);
         const response = await axiosInstance.post(url, data, { headers: this.headers });
         return response;
       } catch (error) {
         throw error;
       }
     };

     <!-- similarly for getRequest -->
   }

   export default HttpService;
   ```

Now, when making API calls, use `axiosInstance` instead of `axios`. This structure enhances maintainability and follows industry standards.


*** Now for example in auth comp. make auth.service.js
Demonstrates how to create a service (AuthService) that extends the HTTP service class. It includes a method (registerProcess) for handling user registration.

- make AuthService extends HttpService
- make func. registerProcess
    - use this.postRequest() to get response and return it

auth/auth.service.js  
```javascript
import HttpService from './http.service';

class AuthService extends HttpService {
  registerProcess = async (userData) => {
    try {
      // Define your API endpoint for user registration
      const registerEndpoint = '/v1/register';

      // Use postRequest from HttpService to make the registration request
      const response = await this.postRequest(registerEndpoint, userData,{file:true});

      // Process the response as needed (e.g., handle success or error cases)
      return response;
    } catch (error) {
      throw error;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;

```

*** And In resigter component's registerSubmit func
Shows how to use the AuthService in a registration component to handle the registration process.

```javascript
const response = await authSvc.registerProcess(data);
```

NOW ANY REGISTER CALL IN THE PROJECT WE CAN USE registerProcess() function



***** INTERCEPTION 
* To modify the response of server OR before sending request
// component ==> serviceRepo ==> axiosConfig =>INTERCEPT==> network
// Network ==> axiosConfig ==> INTERCEPT ==> ServiceRepo ==> Component

```javascript
axiosInstance.interceptors.response.use(
    (response)=>{
        //200
        return response.data;
    },
    (error)=>{
        // error handeling
        // 400, 422 ->validation failure
        // 401 (unauth),403 (access deny),404(not found) ->general errors
        if(error.response.status === 401){
            //TODO: clear
            //TODO: redirect to login screen
            // refresh token ==> call
        }
        throw error.response.data;
    }
)
```
