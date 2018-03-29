import * as pureta from "pureta";

export default class ExecPlugin extends pureta.Plugin {
    dirs = {
        asset: ["assets"],
        controller: ["controllers"], // look in /controllers for controllers
        view: ["views"] // look in /views for views
    };
    modelDirs = ["models"]; // separate because @pureta/db-typeorm is a separate plugin

    async registerHandlers() { }
}
