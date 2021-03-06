const express = require('express');
const app = express();
// const router = express.Router();
const connectDB = require('./models/connectDB')
const router= require('./routers/router');
const cors = require('cors')

require("dotenv").config();


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
app.use(cors());
app.use(express.json());
app.use('/', router);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});