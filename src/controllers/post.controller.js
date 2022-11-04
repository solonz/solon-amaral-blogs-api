// const { validateUser } = require('../middlewares/validations');
const postService = require('../services/post.service');

// const addPost = async (req, res) => {
//     const data = req.body;
//     // const { id } = req.user;
  
//     const result = await postService.addPost(data);
  
//     if (result) {
//       return res.status(201).json(result);
//     }
//   };
// const { title, content, categoryIds } = req.body;
// if (!title || !content || !categoryIds) {
//     return res.status(400).json({ message: 'Some required fields are missing' });
// }
// return res.status(201).json({ result });

const getPost = async (req, res) => {
    const result = await postService.getPost();
    return res.status(result.status).json(result.message);
};

// const getUserById = async (req, res) => {
// const { id } = req.params;
// const { type, message } = await userService.getUserById(id);
// if (type) { return res.status(404).json({ message }); }
// return res.status(200).json(message);
// };

module.exports = { 
    // addPost,
    getPost,
};