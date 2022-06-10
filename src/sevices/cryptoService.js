import axios from 'axios';

export default class CryptoService {
    static async getCryptocurrency(crypt) {
        return await axios.get(`https://api.coingecko.com/api/v3/coins/${crypt}`)
    }
    static async getCryptocurrencyHistory(crypt, currency, days) {
        return await axios.get(`https://api.coingecko.com/api/v3/coins/${crypt}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`)
    }
}