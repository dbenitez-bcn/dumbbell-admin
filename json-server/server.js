const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("json-server/api.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/admin/login", (req, res, next) => {
    res.send({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0Ijo0MDg2MDEyMDY0fQ.o4-mifRaILpS663QUCiQwIdMDKxSsu8Yb5-W1YwZf9w",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0Ijo0MDg2MDEyMDY0fQ.o4-mifRaILpS663QUCiQwIdMDKxSsu8Yb5-W1YwZf9w"
    })
});

server.post("/auth/refresh", (req, res, next) => {
    res.send({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0Ijo0MDg2MDEyMDY0fQ.o4-mifRaILpS663QUCiQwIdMDKxSsu8Yb5-W1YwZf9w",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0Ijo0MDg2MDEyMDY0fQ.o4-mifRaILpS663QUCiQwIdMDKxSsu8Yb5-W1YwZf9w"
    })
});

server.post("/auth/logout", (req, res, next) => {
    res.send({})
});

server.use(router);

server.listen(8080, () => {
    console.log("Started");
})