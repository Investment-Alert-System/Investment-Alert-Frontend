import React, { useState } from 'react';
import {ScaleButton, ScaleTag, ScaleTextField} from "@telekom/scale-components-react";
import { Stock } from "../model/Stock.ts";
import { setAlertLimitPerSymbol } from "../services/StockList.ts";
import { StockLimit } from "../model/StockLimit.ts";

interface StockTableProps {
    stocks: Stock[];
}

let StockTable: React.FC<StockTableProps> = ({ stocks }) => {
    const [stockLimits, setStockLimits] = useState<{[symbol: string]: number }>({});

    const handleLimitChange = (symbol: string, limit: number) => {
        setStockLimits(prevLimits => ({
            ...prevLimits,
            [symbol]: limit
        }));
    };

    const deleteSubcription = (symbol: string): void => {
        console.log("Delete subscription for stock: " + symbol);
    }

    const handleSubscribe = async (stock: Stock) => {
        // Aktualisiere das Limit für das ausgewählte Stock
        const limitElement = document.getElementById(`limit-${stock.symbol}`) as HTMLInputElement;
        const newLimit = parseFloat(limitElement.value);
        handleLimitChange(stock.symbol, newLimit);

        const limit = stockLimits[stock.symbol] || newLimit;
        console.log(`Subscribed to stock: ${stock.title}, Limit: ${limit}`);
        let stockLimit: StockLimit = new StockLimit(stock.symbol, limit);
        try {
            await setAlertLimitPerSymbol(stockLimit);
            console.log(stockLimit);
        } catch (error) {
            console.error('Error in handleSubscribe:', error);
        }
    };

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:bg-telekom-dark-gray dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <h1>Stock name</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1>Symbol</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1>Limit</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1>Subscribe</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1>Delete subscription</h1>
                    </th>
                </tr>
                </thead>

                <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-telekom-gray dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {stock.title}
                        </th>
                        <td className="px-6 py-4">
                            <ScaleTag>
                                {stock.symbol}
                            </ScaleTag>
                        </td>
                        <td className="px-6 py-4">
                            <ScaleTextField
                                id={`limit-${stock.symbol}`}
                                label="Set here your limit!"
                                value={stockLimits[stock.symbol] !== undefined ? stockLimits[stock.symbol].toString() : ''}
                                onChange={(e: any) => handleLimitChange(stock.symbol, parseFloat(e.target.value))}
                            />
                        </td>
                        <td className="px-6 py-4">
                            <ScaleButton onClick={() => handleSubscribe(stock)}>
                                Subscribe
                            </ScaleButton>
                        </td>
                        <td className="px-6 py-4">
                            <ScaleButton onClick={() => deleteSubcription(stock.symbol)}>
                                Delete
                            </ScaleButton>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StockTable;
