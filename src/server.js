const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const { getDate } = require("./plugins");
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.state("username", {
    ttl: null,
    isSecure: true,
    isHttpOnly: true,
  });
  server.route(routes);
  await server.register({
    plugin: getDate,
    options: {
      name: "Ian",
    },
  });

  await server.start();
  console.log(`Server start in ${server.info.uri}`);
};

init();
