const axios = require('axios');
import {Stock} from "../model/Stock.ts";

const apiEndpoint = "";

console.log(apiEndpoint);

// Get
export async function getAllStocks()  {
    try {
        const response = await axios.get(apiEndpoint);
        console.log(response);
        let stockList: String[] = [];
        return stockList;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Post
export async function sendStockSubscription(stock: String) {
    try {
        const response = await axios.post(apiEndpoint, {
            stock: stock
        });
        console.log(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
}