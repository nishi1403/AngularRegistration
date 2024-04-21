const express = require("express");
const app = express();
var mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors({
  origin:"http://localhost:4200"
}))
app.use(express.json());

app.use(routes);




mongoose.connect(
  "mongodb+srv://nishicoder:gVZWojejs7dOBUhJ@cluster0.gigmt9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}
);

const PORT = 5000;


  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });



 


  