import {Project} from "../model/Project.ts";



export default function getProjects(): Project[]{
    return [
        new Project(
            "ArgoCD",
            "A GitOps continuous delivery tool for Kubernetes.",
            "",
            "https://argo-cd.readthedocs.io/en/stable/",
            "",
            "https://miro.medium.com/v2/resize:fit:1400/1*An25ihShzJkhL3jAwUaWfg.png"
        ),
        new Project(
            "KeyCloak",
            "An identity and access management solution.",
            "",
            "keycloak.localhost",
            "",
            "https://static-00.iconduck.com/assets.00/keycloak-icon-2048x2048-5ge904so.png"
        ),
        new Project(
            "Traefik",
            "A modern HTTP reverse proxy and load balancer.",
            "",
            "http://traefik.localhost",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
        ),
        new Project(
            "Prometheus",
            "A monitoring and alerting toolkit.",
            "",
            "http://prometeus.localhost",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
        ),
        new Project(
            "AlertManager",
            "A Prometheus alert manager.",
            "",
            "http://alertmanager.localhost",
            "",
            "https://devopy.io/wp-content/uploads/2019/02/bell_260.svg"
        ),
        new Project(
            "Grafana",
            "A analytics and visualization web application.",
            "",
            "http://grafana.localhost",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png"
        ),
        new Project(
            "Kibana",
            "A data visualization dashboard for Elasticsearch.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://static-00.iconduck.com/assets.00/kibana-icon-1537x2048-476gnmfc.png"
        ),
        new Project(
            "Elasticsearch",
            "A distributed, RESTful search and analytics engine.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://static-00.iconduck.com/assets.00/elasticsearch-icon-1839x2048-s0i8mk51.png"
        ),
        new Project(
            "Kafka",
            "A distributed event streaming platform.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/1200px-Apache_kafka-icon.svg.png"
        ),
        new Project(
            "RabbitMQ",
            "A message broker.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://static-00.iconduck.com/assets.00/rabbitmq-icon-484x512-s9lfaapn.png"
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
            "Vault",
            "Managing secrets and protecting sensitive data.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://www.svgviewer.dev/static-svgs/405455/vault.svg"
        ),
        new Project(
            "InfluxDB",
            "A time series database.",
            "",
            "https://www.influxdata.com/products/influxdb/",
            "",
            "https://static-00.iconduck.com/assets.00/influxdb-icon-2017x2048-38lz5101.png"
        ),
        new Project(
            "Kyverno",
            "A policy engine designed for Kubernetes.",
            "",
            "https://kyverno.io/",
            "",
            "https://repository-images.githubusercontent.com/169108858/35923880-823a-11e9-9089-0c9c102f9e6f"
        ),
        new Project(
            "GitHub",
            "A Git repository hosting service.",
            "",
            "https://github.com/philipppollmann/Telekom-Project-Launchpad",
            "",
            "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        ),
    ]
}
