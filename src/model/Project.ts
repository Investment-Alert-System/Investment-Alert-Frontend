export class Project {
    title: string;
    description: string;
    icon: string;
    to: string;
    target: string;
    iconSrc: string;

    constructor(title: string, description: string, icon: string, to: string, target: string, iconSrc: string) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.to = to;
        this.target = target;
        this.iconSrc = iconSrc;
    }

}