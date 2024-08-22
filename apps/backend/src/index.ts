import express, { Request, Response } from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listning on port ${port}    `);
});
