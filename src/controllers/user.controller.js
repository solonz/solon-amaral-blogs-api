// const { validateUser } = require('../middlewares/validations');
const userService = require('../services/user.service');

const addUser = async (req, res) => {
    const data = req.body;
  const { type, message } = await userService.addUser(data);
  if (type) {
 return res.status(409).json({ message }); 
}
  return res.status(201).json({ token: message });
};

const getUser = async (_req, res) => {
const { message } = await userService.getUser();
res.status(200).json(message);
};

const getUserById = async (req, res) => {
const { id } = req.params;
const { type, message } = await userService.getUserById(id);
if (type) { return res.status(404).json({ message }); }
return res.status(200).json(message);
};

module.exports = { 
    addUser,
    getUser,
    getUserById,
 };