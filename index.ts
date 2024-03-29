import {Hono} from "hono";
import {logger} from "hono/logger";
import {serve} from "@hono/node-server";

const app = new Hono();

const port = process.env.PORT
    ? parseInt(process.env.PORT)
    : 3333;

/**
 * Middleware
 */
app.use(logger());

/**
 * Routes
 */
app.get("/", (c) => c.text("Hono meets node.js spaceguy!"));
app.get("/hello", (c) => c.text("Hello Hono!"));

/**
 * Server
 */
try {
    serve({
        fetch: app.fetch,
        port: parseInt(port as unknown as string),
    });
} catch (e: unknown) {
    console.log(e);
} finally {
    const heart = `\uD83D\uDE0D`
    console.log(`Hono served hot @ http://localhost:${port} ${heart}!`)
}
