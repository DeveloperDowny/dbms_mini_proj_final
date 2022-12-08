import express from "express";

const router = express.Router();

router.post("/account/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get("/account/login", (req, res) => {});

router.get("/", (req, res) => {
  res.send("user");
});

export default router;
