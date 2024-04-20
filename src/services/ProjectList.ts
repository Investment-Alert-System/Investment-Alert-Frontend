import {Project} from "../model/Project.ts";

export function getAllProjects(){
    return [ // List of all projects
        new Project(
            "Traefik",
            "Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy.",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png",
            "traefik.localhost",
            "https://traefik.io/",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
        ),
    ]
}