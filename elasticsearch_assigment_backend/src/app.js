const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const searchRoutes = require("./routes/search");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", searchRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
