// const { validateUser } = require('../middlewares/validations');
const categoryService = require('../services/category.service');

const addCategory = async (req, res) => {
    const { name } = req.body;
    if (!name || name.length < 1) {
        // eslint-disable-next-line quotes
        return res.status(400).json({ message: "\"name\" is required" });
    }
    const { message } = await categoryService.addCategory(name);
    return res.status(201).json({ id: message.id, name });
};

// const getUser = async (_req, res) => {
// const { message } = await userService.getUser();
// res.status(200).json(message);
// };

// const getUserById = async (req, res) => {
// const { id } = req.params;
// const { type, message } = await userService.getUserById(id);
// if (type) { return res.status(404).json({ message }); }
// return res.status(200).json(message);
// };

module.exports = { 
    addCategory,
    // getUser,
    // getUserById,
 };