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

//   const { displayName, email, password } = req.body;
//   const userValidation = validateUser(req.body);
//   console.log(userValidation);
//   if (userValidation.message) {
//     return res.status(400).json(userValidation.message);
//   }
//   const result = await userService.addUser(displayName, email, password);
//   if (result.type) {
//     return res.status(409).json({ message: result.message });
//   }
//   return res.status(201).json({ token: result });
// };

module.exports = { 
    addUser,
 };