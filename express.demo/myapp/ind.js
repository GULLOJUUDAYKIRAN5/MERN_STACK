const express = require("express");
const app = express();

// Define a route
app.get("/uday", (req, res) => {
  res.send("Hello World! Express 🚀");
});
app.get("/contact", (req, res) => {
  res.json({message:"hello uday"});
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
