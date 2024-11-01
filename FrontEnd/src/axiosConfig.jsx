   // FrontEnd/src/utils/axiosConfig.js
   import axios from 'axios';

   // Create an Axios instance
   const axiosInstance = axios.create({
     baseURL: 'http://localhost:3000/api/v1', // Set your base URL
   });

   // Add a request interceptor
   axiosInstance.interceptors.request.use(
     (config) => {
       // Get the token from localStorage
       const token = localStorage.getItem('token'); // Adjust the key as needed

       // If the token exists, set the Authorization header
       if (token) {
         config.headers.Authorization = `${token}`;
       }

       return config;
     },
     (error) => {
       // Handle the error
       return Promise.reject(error);
     }
   );

   export default axiosInstance;