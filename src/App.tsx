import {AppHeader} from "./components/AppHeader.tsx";
import AppFooter from "./components/AppFooter.tsx";
import ProjectLaunchpad from "./components/ProjectLaunchpad.tsx";
import {ScaleDivider} from "@telekom/scale-components-react";
import StockTable from "./components/StockTable.tsx";
import {Stock} from "./model/Stock.ts";

const stockList: Stock[] = [
    new Stock('Apple MacBook Pro 17"', 2000),
    new Stock('Microsoft Surface Pro', 1500),
    new Stock('Magic Mouse 2', 100),
];

export default function App() {
    return (
        <>
            <AppHeader/>
            <h1>Projects</h1>
            <ProjectLaunchpad/>
            <ScaleDivider/>
            <h1>Subscribe to the shares you want to receive updates on</h1>
            <StockTable stocks={stockList}/>
            <AppFooter/>
        </>
    )
}

