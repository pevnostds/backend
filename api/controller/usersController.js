
const {users} = require("../../models")

// Mendapatkan semua user
 const getUsers = async (req, res) => {
  try {
    const data = await users.findAll();
    const result ={
        status:'success',
        data
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan user berdasarkan ID
 const getUserById = async (req, res) => {
  try {
    const data = await users.findByPk(req.params.id);
    const result ={
        status:'success',
        data
    }
    if (!data) return res.status(404).json({ message: "User not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



 const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const user = await users.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.findByPk(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getUsers,getUserById,deleteUser,updateUser}