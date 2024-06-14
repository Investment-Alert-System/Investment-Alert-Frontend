import {Project} from "../model/Project.ts";

export default function getProjects(): Project[]{
    return [
        new Project(
            "Traefik",
            "A modern HTTP reverse proxy and load balancer.",
            "",
            "http://traefik.acceleratedit.de/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
        ),
        new Project(
            "Prometheus",
            "A monitoring and alerting toolkit.",
            "",
            "http://prometheus.acceleratedit.de/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
        ),
        new Project(
            "AlertManager",
            "A Prometheus alert manager.",
            "",
            "http://alertmanager.localhost",
            "",
            "https://www.cloudron.io/store/icons/io.prometheus.alertmanager.cloudronapp.png"
        ),
        new Project(
            "Grafana",
            "An analytics and visualization web application.",
            "",
            "http://grafana.acceleratedit.de/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png"
        ),
        new Project(
            "Kubernetes Dashboard",
            "A web-based UI for Kubernetes clusters.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png"
        ),
        new Project(
            "Investment-Alert-Frontend Repository",
            "A Git repository hosting service.",
            "",
            "https://github.com/Investment-Alert-System/Investment-Alert-Frontend",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        ),
        new Project(
            "Stock-Data-Streamer Repository",
            "A Git repository hosting service.",
            "",
            "https://github.com/Investment-Alert-System/Investment-Alert-Frontend",
            "",
            "https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png"
        ),
        new Project(
            "Kubernetes Configuration Repository",
            "A Git Repository where you can see the kubernetes configuration",
            "",
            "https://github.com/Investment-Alert-System/Investment-Alert-Frontend",
            "",
            "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/k3s-icon-color-4bcs.png"
        ),
        new Project(
            "Discord",
            "A Discord Server where you can see the alerts",
            "",
            "https://discord.gg/27DXbwMJ6C",
            "",
            "https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-o5mluhz2.png"
        ),
        new Project(
            "Miro Board",
            "A Git repository hosting service.",
            "",
            "https://miro.com/app/board/uXjVNjJ9k4E=/?share_link_id=714968263042",
            "",
            "https://luna1.co/110eb4.png"
        ),
    ]
}
