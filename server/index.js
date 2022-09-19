const app = require("express")();
const http = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

//Socket io setup
io.on("connection", (socket) => {
  socket.emit("me", socket.io);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
