const axios = require('axios');

/**
 * Returns bitcoin price from CoinDesk in GBP.
 * @return {float} The bitcoin price
 */
async function BTCGetPrice() {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  return response.data['bpi']['GBP']['rate'];
}

exports.getPrice = BTCGetPrice;
