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

http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
