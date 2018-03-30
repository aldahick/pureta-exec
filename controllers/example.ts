import * as pureta from "pureta";
import ORM from "@pureta/db-typeorm";
import ExampleItem from "../models/ExampleItem";

export default class TestController extends pureta.Controller {
    get route() { return "/"; } // handle /*, but not /**/* (e.g., /index but not /foo/index)

    async example(@pureta.param.optional secret: string) {
        this.req.session.counter = (this.req.session.counter || 0) + 1;
        this.res.locals.counter = this.req.session.counter;
        this.res.locals.secret = secret;
    }

    @pureta.action({
        url: "example-raw" // available at /example-raw
    })
    async exampleRaw(foo: number) {
        const tests = ORM.db(this).getRepository(ExampleItem); // get a repository for ExampleItem model
        await tests.save(tests.create({ value: "foobar" })); // save a new ExampleItem
        // respond with a JSONified array
        return [await tests.find(), foo, this.config.get("dev.enable"), this.config.get("http.host")];
    }
}
