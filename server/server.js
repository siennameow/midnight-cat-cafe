const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const db = require("./config/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
