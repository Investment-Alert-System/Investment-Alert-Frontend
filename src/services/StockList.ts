import {Stock} from "../model/Stock.ts";
import axios from 'axios';

const apiEndpoint = 'http://localhost:8080/datahandler/configuration';

// Get
export function getAllStocks() {
    try {

        let response = axios.get(`${apiEndpoint}/getAllStocks`);
        console.log(response);

        let stockList: Stock[] = [
            new Stock('Apple', 'AAPL', 150),
            new Stock('Microsoft', '', 400),
            new Stock('Google', '', 170),
        ];

        return stockList;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

// #################################### POST Functions ####################################
// POST Funktion für setAlerts
export async function setAlertLimitPerSymbol(alert: string): Promise<void> {
    try {
        const response = await axios.post(`${apiEndpoint}/setAlerts`, alert, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('setAlertLimitPerSymbol response:', response.data);
    } catch (error) {
        console.error('Error in setAlertLimitPerSymbol:', error);
        throw error;
    }
}

// POST Funktion für setDataPoints
export async function setDataPoints(dataPoints: string[]): Promise<void> {
    try {
        const response = await axios.post(`${apiEndpoint}/setDataPoints`, dataPoints, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('setDataPoints response:', response.data);
    } catch (error) {
        console.error('Error in setDataPoints:', error);
        throw error;
    }
}

// #################################### DELETE Functions ####################################

// DELETE Funktionen für die Endpunkte
async function deleteAlerting(): Promise<void> {
    try {
        const response = await axios.delete(`${apiEndpoint}/deleteAlerting`);
        console.log('deleteAlerting response:', response.data);
    } catch (error) {
        console.error('Error in deleteAlerting:', error);
        throw error;
    }
}


async function deleteSymbols(): Promise<void> {
    try {
        const response = await axios.delete(`${apiEndpoint}/deleteSymbols`);
        console.log('deleteSymbols response:', response.data);
    } catch (error) {
        console.error('Error in deleteSymbols:', error);
        throw error;
    }
}

export async function resetAllStockLimits(): Promise<void> {
    try {
        await deleteAlerting();
        await deleteSymbols();
        console.log('All stock limits have been reset.');
    } catch (error) {
        console.error('Error in resetAllStockLimits:', error);
    }
}