"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var node_server_1 = require("@hono/node-server");
var app = new hono_1.Hono();
var port = process.env.PORT || 3000;
app.get("/", function (c) { return c.text("Hono meets node.js spaceguy!"); });
app.get("/hello", function (c) { return c.text("Hello Hono!"); });
try {
    /**
     * @run "ts-node index.ts"
     * @exit "CTRL+C"
     *
     * @return void
     */
    (0, node_server_1.serve)({
        fetch: app.fetch,
        port: parseInt(port),
    });
}
catch (e) {
    console.log(e);
}
finally {
    var heart = "\uD83D\uDE0D";
    var coffee = "\u2615";
    var merman = "\uD83D\uDDDC";
    console.log("Hono served hot @ http://localhost:".concat(port, " ").concat(heart, "!"));
    console.log("Happy web development ".concat(coffee));
}
