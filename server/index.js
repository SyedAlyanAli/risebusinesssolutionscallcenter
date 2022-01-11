const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./route/user");
const company = require("./route/company");
const userFile = require("./route/userFile");
const cors = require("cors");
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

mongoose
  .connect(
    "mongodb+srv://AlyanAli:Deadpool99@cluster0.lvdck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongodb running");
  })
  .catch((err) => {
    console.log("There is an error while connecting mongodb", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", company);

app.use("/user", userFile);
app.use("/user", user);

app.listen(4000, () => {
  console.log("Server is running");
});
