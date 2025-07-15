const express = require("express");
const path = require("path");
const app = express();

// Serve static files from 'public' folder
app.use(express.static("public"));

// Rewrite all other routes to sub-index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sub-index.html"));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
