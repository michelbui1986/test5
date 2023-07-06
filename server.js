const express = require("express");
const app = express();
const PORT = 3000;

app.get("/search", (req, res) => {
  const { term } = req.query;
  // Perform the search logic here
  // Replace it with your own implementation
  const results = ["Result 1", "Result 2", "Result 3"];

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
