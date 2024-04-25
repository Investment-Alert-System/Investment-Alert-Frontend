import {ProjectCard} from "./ProjectCard.tsx";
import getProjects from "../services/ProjectList.ts";



export default function ProjectLaunchpad() {
    // Ruft die Funktion getProjects auf und speichert die Projekte
    const projects = getProjects();

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
}
