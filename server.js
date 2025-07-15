const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static("public"));

// Catch-all route to serve sub-index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sub-index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
