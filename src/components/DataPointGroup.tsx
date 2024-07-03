import React, { useEffect, useState } from 'react';
import { ScaleCheckbox, ScaleCheckboxGroup, ScaleButton } from "@telekom/scale-components-react";
import { getAllStocks } from "../services/StockList.ts";
import { Stock } from "../model/Stock.ts";

export default function DataPointGroup() {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [selectedStocks, setSelectedStocks] = useState<string[]>([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const stockList = await getAllStocks();
                setStocks(stockList);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocks();
    }, []);

    const handleCheckboxChange = (symbol: string, isChecked: boolean) => {
        setSelectedStocks(prevSelectedStocks => {
            if (isChecked) {
                return [...prevSelectedStocks, symbol];
            } else {
                return prevSelectedStocks.filter(stockSymbol => stockSymbol !== symbol);
            }
        });
    };

    const handleButtonClick = () => {
        console.log('Selected stocks:', selectedStocks);
    };

    return (
        <div className="flex flex-col items-center">
            <ScaleCheckboxGroup label="Select all stocks">
                {stocks.map(stock => (
                    <ScaleCheckbox
                        key={stock.symbol}
                        label={stock.title}
                        name={stock.symbol}
                        value={stock.symbol}
                        onChange={(e: any) => handleCheckboxChange(stock.symbol, e.target.checked)}
                    />
                ))}
            </ScaleCheckboxGroup>
            <ScaleButton className="mt-4" onClick={handleButtonClick}>
                Show Selected Stocks
            </ScaleButton>
        </div>
    );
}
