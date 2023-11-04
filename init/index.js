const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../modals/listing");

const MONGO_URL = "mongodb+srv://developeramitkumar1:fzEjiOggeKDdPi8Y@cluster0.cbsvjmq.mongodb.net/AIRBNB";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true
  });
  
}

const initDB = async () => {
//   await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();