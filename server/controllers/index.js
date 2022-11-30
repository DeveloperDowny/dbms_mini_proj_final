import bcrypt from "bcryptjs";
import getUser from "../services/db_q.js";
// import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  return "test";
};
