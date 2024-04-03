import { db } from "../connect.js";

export const register = (req, res) => {
  //Check user if exists
  const q = "SELECT FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("user already exists!");
  });
  //CREATE A NEW USER
  //HAsh the password
};
export const login = (req, res) => {};

export const logout = (req, res) => {};
