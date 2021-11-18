const User = require("../models/user");
const { generateJWT } = require('../helpers/generate-jwt');
User.sync();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400).json({ msg: " email or password is required" });
    }
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      res.status(404).json({ ok: true, msg: "user not found" });
    }
    const token = await generateJWT(user.id);
    res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: " email or password is required" });
    }
    const user = await User.create({
      email,
      password,
    });
    await user.save();
    res.status(201).json({
      ok: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      err,
    });
  }
};

listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users) {
      return res.status(404).json({ ok: true, users: [] });
    }
    res.status(200).json({ ok: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error });
  }
};

module.exports = {
  login,
  register,
  listUsers,
};
