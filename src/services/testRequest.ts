import {
    deleteAlerting,
    deleteSymbol,
    deleteSymbols,
    getAllStocks,
    setAlertLimitPerSymbol,
    setDataPoints
} from "./StockList.ts";
//import {StockLimit} from "../model/StockLimit.ts";

//let stockList = await getAllStocks();
//console.log(stockList);


// POST new Limit
/*let Apple = new StockLimit("AAPL", 201);
let stTimer = await setAlertLimitPerSymbol(Apple);
console.log(stTimer);*/

let dataPoints: string[] = ["AAPL", "MSFT", "GOOG", "AMZN", "TSLA"];
//await setDataPoints(dataPoints);
// DELETE

await deleteSymbols();
//await deleteAlerting();