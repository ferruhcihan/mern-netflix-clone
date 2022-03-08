const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

main()
  .then(() => console.log("Connected to DB Successfully!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
