import * as pureta from "pureta";

export default class ExecPlugin extends pureta.Plugin {
    dirs = {};

    async registerHandlers() {
        this.app.on("app:start", async () => {
            this.app.logger.info("Hello!");
        });
    }
}
