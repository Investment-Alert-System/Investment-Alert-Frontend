import {AppHeader} from "./components/AppHeader.tsx";
import AppFooter from "./components/AppFooter.tsx";
import ProjectLaunchpad from "./components/ProjectLaunchpad.tsx";
import {ScaleDivider, ScaleTable} from "@telekom/scale-components-react";
import StockTable from "./components/StockTable.tsx";



export default function App() {
    return (
        <>
            <AppHeader/>
            <h1>Projects</h1>
            <ProjectLaunchpad/>
            <ScaleDivider/>
            <h1>Subscribe to the shares you want to receive updates on</h1>
            <ScaleTable>
                <table>
                    <th>
                        Test
                    </th>
                    <th>
                        Test
                    </th>
                    <th>
                        Test
                    </th>
                </table>
            </ScaleTable>
            <AppFooter/>
        </>
    )
}

