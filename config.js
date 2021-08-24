const apiUrl = process.env.NODE_ENV === 'development' 
    ? '/api' // development api
    : '/api'; // production api

export {
    apiUrl
};