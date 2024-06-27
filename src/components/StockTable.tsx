import React from 'react';
import { ScaleButton, ScaleTextField } from "@telekom/scale-components-react";
import { Stock } from "../model/Stock.ts";
import {setAlertLimitPerSymbol} from "../services/StockList.ts";

interface StockTableProps {
    stocks: Stock[];
}

let StockTable: React.FC<StockTableProps> = ({ stocks }) => {
    const handleSubscribe = (stock: Stock) => {
        console.log(`Subscribed to stock: ${stock.title}, Limit: ${stock.limit}`);
        setAlertLimitPerSymbol(JSON.stringify(stock));
        // send new subscription to backend
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
                        <h1>Limit</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1>Subscribe</h1>
                    </th>
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-telekom-gray dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {stock.title}
                        </th>
                        <td className="px-6 py-4">
                            <ScaleTextField
                                id={`limit-${index}`}
                                label="Set here your limit!"
                                value={stock.limit ? stock.limit.toString() : ''}
                            />
                        </td>
                        <td className="px-6 py-4">
                            <ScaleButton onClick={() => handleSubscribe(stock)}>
                                Subscribe
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
