"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var node_server_1 = require("@hono/node-server");
/* WOW Hono is so smol */
var app = new hono_1.Hono();
app.get("/", function (c) { return c.text("Hono meets node.js spaceguy!"); });
/**
 * @run "ts-node index.ts"
 * @exit "CTRL+C"
 *
 * @return void
 */
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: 3000,
}).then;
