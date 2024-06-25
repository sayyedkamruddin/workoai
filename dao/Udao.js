const user = require("../models/userModel");

const getAllUsers = async () => {
  return await user.find();
};

const getUserById = async (id) => {
  // return await user.findById(id);
  return await user.findOne({id:id});

};

const createUser = async (Udata) => {
  const User = new user(Udata);
  return await User.save();
};

const updateUser = async (id, Udata) => {
  return await user.findOneAndUpdate({id:id}, Udata, { new: true });
};
const deleteUser = async (id) => {
  return await user.findOneAndDelete({id:id});
};

module.exports={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
