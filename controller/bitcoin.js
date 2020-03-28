const axios = require('axios');

async function BTCGetPrice() {
    let response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    return response.data['bpi']['GBP']['rate'];
}

exports.getPrice = BTCGetPrice;
