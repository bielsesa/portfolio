export default class Project {
    title: string;
    url: string;
    description?: string;
    thumbnail?: string;
    buttonText?: string;
    display?: string;

    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }
} 