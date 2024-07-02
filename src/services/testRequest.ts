import {getAllStocks, setAlertLimitPerSymbol} from "./StockList.ts";
import {StockLimit} from "../model/StockLimit.ts";

let stockList = await getAllStocks();
//console.log(stockList);

let Apple = new StockLimit("Apple Inc.", 100);
let stTimer = await setAlertLimitPerSymbol(Apple);
console.log(stTimer);