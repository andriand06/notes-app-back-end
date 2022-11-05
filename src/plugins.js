const getDate = {
  name: "getDate",
  version: "1.0.0",
  register: async function (server, options) {
    const currentDate = () => {
      const date = `Hi ${options.name}, the date is ${new Date()}`;
      return date;
    };
    server.decorate("toolkit", "getDate", currentDate);
  },
};

module.exports = { getDate };
