import {Stock} from "../model/Stock.ts";

export default function convertToStockArray(data: {symbol: string, companyName: string}[]): Stock[] {
    return data.map(item => new Stock(item.companyName, item.symbol));
}