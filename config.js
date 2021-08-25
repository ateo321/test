const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/api' // development api
    : 'https://wwww.batdongsan360.com/api'; // production api

export {
    apiUrl
};