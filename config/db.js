const mongoose = require("mongoose");

const connectionString = 'mongodb+srv://Talky:justSMILE555@talky.oubvquk.mongodb.net/talky';
mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));