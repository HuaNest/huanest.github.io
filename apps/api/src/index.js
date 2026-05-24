const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "huanest-heritage-api" });
});

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "HuaNest Heritage API scaffold is running.",
    docs: "See README.md for build and deployment instructions."
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
