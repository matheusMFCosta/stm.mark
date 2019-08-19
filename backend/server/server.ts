import * as mongoose from "mongoose";
import app from "./app";

const url = process.env.MONGODB_URI || "mongodb+srv://stm-market:1q2w3e4r5t6Y@cluster0-ouvyr.mongodb.net/test?retryWrites=true&w=majority";
const port = process.env.PORT || 9000;

(async () => {
  // Connect to the database
  // await mongoose.connect(url, { useNewUrlParser: true });
  // Populate database with sample data if it's empty
  // Start express App
  app.listen(port);
  console.log(`App listening on port ${port}...`);
})();
