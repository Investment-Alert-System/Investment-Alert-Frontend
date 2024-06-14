import axios from 'axios';
import {Stock} from "../model/Stock.ts";

let response = await axios.get('http://localhost:8080/datahandler/configuration/getAllStocks');
console.log(response.data);


function convertToStockArray(data: {symbol: string, companyName: string}[]): Stock[] {
    return data.map(item => new Stock(item.companyName, item.symbol));
}

console.log(convertToStockArray(response.data));

