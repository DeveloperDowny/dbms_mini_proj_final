import express from "express";

const router = express.Router();

// app.use("/account/login", login);
// app.use("/account/signup");
// app.use("/transfer");
// app.use("/transactions");

router.post("/account/login", (req, res) => {
  //   let data = req.body;
  //   return `test ${data}`;
  //   return "ok";
  console.log(req.body);
  res.send(req.body);
});

router.get("/account/login", (req, res) => {
  //   let data = req.body;
  //   return `test ${data}`;
  //   return "ok";
});

router.get("/", (req, res) => {
  res.send("user");
});

export default router; // so that index.js could use it
