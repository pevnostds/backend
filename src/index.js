const express = require("express");
const cors = require("cors");
const routers = require("./routes");

const app = express();
const PORT = 3003;


app.use(
  cors({
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use(routers);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
