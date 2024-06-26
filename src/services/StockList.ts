import {Stock} from "../model/Stock.ts";
import axios from 'axios';
import getAPIEndpoint from "../common/APISpecification.ts";
import convertToStockArray from "./JsonConverter.ts";
import {StockLimit} from "../model/StockLimit.ts";

const apiEndpoint = getAPIEndpoint();

// #################################### GET Functions ####################################
// Get
export async function getAllStocks(): Promise<Stock[]> {
    try {
        const response = await axios.get(`${apiEndpoint}/getAllStocks`);
        console.log(response.data);
        return convertToStockArray(response.data);

    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
}

// #################################### POST Functions ####################################
// POST Funktion für setAlerts
export async function setAlertLimitPerSymbol(stockLimit: StockLimit) {
    console.log(stockLimit);
    try {
        // Konvertieren Sie das stockLimit-Objekt in das erwartete Format
        let dataToSend = {[stockLimit.symbol]: stockLimit.limit};

        const response = await axios.post(`${apiEndpoint}/setAlerts`, dataToSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('setAlertLimitPerSymbol response:', response.data);
        return response;
    } catch (error) {
        console.error('Error in setAlertLimitPerSymbol:', error);
        throw error;
    }
}

// POST Funktion für setDataPoints
export async function setDataPoints(dataPoints: string[]): Promise<void> {
    try {
        const response = await axios.post<string>(`${apiEndpoint}/setDataPoints`, dataPoints, {
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

export async function deleteAlerting(): Promise<void> {
    try {
        const response = await axios.delete(`${apiEndpoint}/deleteAlerting`);
        console.log('deleteAlerting response:', response.data);
    } catch (error) {
        console.error('Error in deleteAlerting:', error);
        throw error;
    }
}


export async function deleteSymbols(): Promise<void> {
    try {
        const response = await axios.delete(`${apiEndpoint}/deleteSymbols`);
        console.log('deleteSymbols response:', response.data);
    } catch (error) {
        console.error('Error in deleteSymbols:', error);
        throw error;
    }
}