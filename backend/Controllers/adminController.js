import userModel from "../Models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const user=req.user._id;
        const users=await userModel.find({ _id: { $ne: user } }).select("name email role");
        if(!users){
            return res.status(404).json({ success: false, message: "No users found." });
        }
        return res.status(200).json({ success: true, message: "Users fetched successfully.", users });
    } catch (error) {
        console.log(`Error -> ${error}`)
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}