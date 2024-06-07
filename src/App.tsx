import {AppHeader} from "./components/AppHeader.tsx";
import AppFooter from "./components/AppFooter.tsx";
import ProjectLaunchpad from "./components/ProjectLaunchpad.tsx";
import {ScaleDivider} from "@telekom/scale-components-react";
import StockTable from "./components/StockTable.tsx";
import {getAllStocks} from "./services/StockList.ts";

const stockList = await getAllStocks();

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

