import express from "express";

const router = express();
const port = process.env.PORT || 3000;

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.listen(port, () => {
  console.log(`Server is running on port ${port}: http://localhost:${port}`);
});
