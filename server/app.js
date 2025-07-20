const { start } = require("./controller/community.controller");
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouters = require("./routes/authRouters");
const homeRouters = require("./routes/homeRouters");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

start();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use("/api/auth" , authRouters);
app.use("/api/home" , homeRouters); 

app.use("/", (req, res) => {
  res.status(404).json({
    success: false,
    message: "No route exists!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
