const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/api' // development api
    : 'https://www.batdongsan360.com/api'; // production api

export {
    apiUrl
};