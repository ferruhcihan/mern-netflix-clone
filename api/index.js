const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

main().then(() => console.log('Connected to DB Successfully!')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})
