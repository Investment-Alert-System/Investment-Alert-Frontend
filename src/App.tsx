import { useState, useEffect } from 'react';
import { AppHeader } from "./components/AppHeader.tsx";
import AppFooter from "./components/AppFooter.tsx";
import ProjectLaunchpad from "./components/ProjectLaunchpad.tsx";
import StockTable from "./components/StockTable.tsx";
import { getAllStocks } from "./services/StockList.ts";
import { Stock } from "./model/Stock.ts";

export default function App() {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const stockList = await getAllStocks();
                setStocks(stockList);
            } catch (error) {
                setError('Failed to fetch stocks');
                console.error('Error fetching stock data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    return (
        <>
            <AppHeader/>
            <h1>Projects</h1>
            <ProjectLaunchpad/>
            <h1>Subscribe to the shares you want to receive updates on</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <StockTable stocks={stocks}/>
            )}
            <AppFooter/>
        </>
    )
}
