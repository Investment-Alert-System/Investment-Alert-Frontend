import {Stock} from "../model/Stock.ts";
import axios from 'axios';

//const apiEndpoint = "localhost:8080/datahandler/configuration/";

// Get
export function getAllStocks() {
    try {

        let response = axios.get('http://localhost:8080/datahandler/configuration/getAllStocks');
        console.log(response);

        let stockList: Stock[] = [
            new Stock('Apple', 'AAPL', 2000),
            new Stock('Microsoft', '', 1500),
            new Stock('Google', '', 100),
        ];

        return stockList;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function postNewLimitSubscription(stock: String, limit: number): void {
    console.log(`${stock}, ${limit}`);
}

// Post
export function resetAllStockLimits(): void{

}
