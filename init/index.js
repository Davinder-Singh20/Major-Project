const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = 'mongodb+srv://3091davindersingh:XfF0DBF0B7hnZUE8@cluster0.a12cuua.mongodb.net/wanderlust';

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68de2af5cac7c3e0a9f57af8",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
