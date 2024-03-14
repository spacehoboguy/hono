import {Hono} from "hono";
import {serve} from "@hono/node-server";

const app = new Hono();

const port = process.env.PORT || 3000;

app.get("/", (c) => c.text("Hono meets node.js spaceguy!"));
app.get("/hello", (c) => c.text("Hello Hono!"));

try {
    /**
     * @run "ts-node index.ts"
     * @exit "CTRL+C"
     *
     * @return void
     */
    serve({
        fetch: app.fetch,
        port: parseInt(port as string),
    });

} catch (e: unknown) {
    console.log(e);
} finally {
    const heart = `\uD83D\uDE0D`

    console.log(`Hono served hot @ http://localhost:${port} ${heart}!`)
    console.log(`Happy web development!`)
}
