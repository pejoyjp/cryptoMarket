const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
        'X-RapidAPI-Key': 'ed33171e4bmsh9dc699834a9f616p1b033cjsn090847d2512f',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});