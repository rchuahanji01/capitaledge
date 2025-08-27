// export const API_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
//     ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
//     : 'http://localhost:8888/api/';
// export const BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//     ? import.meta.env.VITE_BACKEND_SERVER
//     : 'http://localhost:8888/';

// export const WEBSITE_URL = import.meta.env.PROD
//   ? 'http://cloud.idurarapp.com/'
//   : 'http://localhost:3000/';
// export const DOWNLOAD_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//     ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
//     : 'http://localhost:8888/download/';
// export const ACCESS_TOKEN_NAME = 'x-auth-token';

// export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;

// //  console.log(
// //    '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
// //  );


// Backend API base URL
export const API_BASE_URL =
  import.meta.env.PROD
    ? `${import.meta.env.VITE_BACKEND_SERVER}api/`
    : import.meta.env.VITE_DEV_REMOTE === 'remote'
      ? `${import.meta.env.VITE_BACKEND_SERVER}api/`
      : 'https://capitaledgebackend.onrender.com/api/';

// General backend URL
export const BASE_URL =
  import.meta.env.PROD
    ? import.meta.env.VITE_BACKEND_SERVER
    : import.meta.env.VITE_DEV_REMOTE === 'remote'
      ? import.meta.env.VITE_BACKEND_SERVER
      : 'https://capitaledgebackend.onrender.com/';

// // Website URL
// export const WEBSITE_URL = import.meta.env.PROD
//   ? 'https://cloud.idurarapp.com/'
//   : 'http://localhost:3000/';

// File download URLs
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD
    ? `${import.meta.env.VITE_BACKEND_SERVER}download/`
    : import.meta.env.VITE_DEV_REMOTE === 'remote'
      ? `${import.meta.env.VITE_BACKEND_SERVER}download/`
      : 'https://capitaledgebackend.onrender.com/download/';

// Token name
export const ACCESS_TOKEN_NAME = 'x-auth-token';

// File base URL (taken directly from env)
export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;
