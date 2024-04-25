import {ScaleCard} from "@telekom/scale-components-react";
import {Project} from "../model/Project.ts";

interface ProjectCardProps {
    project: Project;
}


export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <>
            <div className="w-1/6 m-6">
                <ScaleCard to={project.to} target={project.target}>
                    <div>
                        <img
                            className="h-48 justify-center items-center" // tailwindcss class
                            src={project.iconSrc}
                            alt={`${project.title} Icon`}
                        />
                        <div>
                            <h3 className="text-lg font-bold">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </ScaleCard>
            </div>
        </>
    );
}