import React from 'react';
import { ScaleButton, ScaleTextField } from "@telekom/scale-components-react";
import { Stock } from "../model/Stock.ts";

interface StockTableProps {
    stocks: Stock[];
}

const StockTable: React.FC<StockTableProps> = ({ stocks }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <h2>Stock name</h2>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h2>Limit</h2>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h2>Subscribe this stock</h2>
                    </th>
                </tr>
                </thead>
                <tbody>
                {stocks.map((stock, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {stock.title}
                        </th>
                        <td className="px-6 py-4">
                            <ScaleTextField
                                id={`limit-${index}`}
                                label="Set here your limit!"
                                value={stock.limit.toString()}
                            />
                        </td>
                        <td className="px-6 py-4">
                            <ScaleButton>
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
