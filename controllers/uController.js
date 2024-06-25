const userService = require("../services/uService");
const userDTO = require("../dtos/uDto");
const userValidator = require("../validators/uValidators");

const getAllUsers = async (req, res) => {
  try {
    console.log(req.headers.authorization);
    const users = await userService.getAllUsers();
    console.log(users);
    res.json(userDTO.multipleUsersResponse(users));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    console.log(user);
    res.json(userDTO.singleUserResponse(user));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { error } = userValidator.validateUser(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(userDTO.singleUserResponse(newUser));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { error } = userValidator.validateUser(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.json(userDTO.singleUserResponse(updatedUser));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const d = await userService.deleteUser(req.params.id);
    console.log(d === null);
    // res.status(204).end();

    if (d === null) {

      res.send("User Not Exist")
    } else {
      res.send("User Deleted Successfully")

    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
