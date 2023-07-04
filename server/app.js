const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });
require("./db");
console.log(process.env.JWT_SECRET);
const routes_auth = require("./routes/auth");

const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

app.use("/api/auth", routes_auth);

app.listen(process.env.PORT || 80, () => {
  console.log(`connected to port ${process.env.PORT || 80}`);
});