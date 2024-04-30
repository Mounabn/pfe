const express = require("express");
const dotenv = require("dotenv");
const Mongose = require("mongoose");

dotenv.config();
Mongose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello  ");
});

const port = 3001;
app.listen(port, () => {
  console.log(`Api is running on port ${port}`);
});
