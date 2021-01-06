// import React, { useState, useEffect } from 'react';

// // eslint-disable-next-line react/display-name
// const withErrorHandler = (Component, axios) => props => {
//     const [Error, setError] = useState(null);
//     let reqInterceptor;
//     let resInterceptor;
//     console.log(Error);
//     useEffect(() => {
//         reqInterceptor = axios.interceptors.request.use(req => {
//             setError(null);
//             return req;
//         });
//         resInterceptor = axios.interceptors.response.use(
//             res => res,
//             err => {
//                 setError(err);
//                 console.log('err', err);
//                 return Promise.reject(err);
//             }
//         );
//         return () => {
//             axios.interceptors.request.eject(reqInterceptor);
//             axios.interceptors.response.eject(resInterceptor);
//         };
//     }, [props]);

//     return <Component {...props} />;
// };
// export default withErrorHandler;
