const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    params: {
        api_Key: '2c98cbed70064df2a0893f1af2d6cc3c'
    }
});

module.exports = instanciaAxios;