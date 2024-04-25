import {AppHeader} from "./components/AppHeader.tsx";
import AppFooter from "./components/AppFooter.tsx";
import ProjectLaunchpad from "./components/ProjectLaunchpad.tsx";
import {ScaleDivider} from "@telekom/scale-components-react";



export default function App() {
    return (
        <>
            <AppHeader/>
            <h1>Projects</h1>
            <ProjectLaunchpad/>
            <ScaleDivider/>
            <h1>Dashboards</h1>
            <AppFooter/>
        </>
    )
}

