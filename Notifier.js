const { Server } = require("socket.io");

let io;

var users = {};

module.exports = {
  init: function (server) {
    io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
    io.on("connection", (socket) => {
      const { type, id } = socket.handshake.auth;
      users[id] = socket.id;
      console.log(users);
      socket.on("disconnect", () => {
        delete users[id];
        console.log("user disconnected");
      });
    });
    return io;
  },
  getIO: function () {
    if (!io) {
      throw new Error("Can't get io instance before calling .init()");
    }
    return io;
  },
  sendNotification: function (user, message) {
    if (io) {
      console.log(user);
      io.to(users[user]).emit("message", message);
    }
  },

  users: users,
};
