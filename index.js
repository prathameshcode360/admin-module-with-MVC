import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3300, () => {
  console.log("server is running on port 3300");
});
