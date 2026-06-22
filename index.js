import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send({
    message: "welcome to github actions",
  });
});

app.listen(port, () => {
  console.log("server running on port:->", port);
});
