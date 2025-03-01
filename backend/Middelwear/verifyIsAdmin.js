import userModel from "../Models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const verifyIsAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.LoginCookie;
        if (!token) {
            return res.status(401).json({ success: false, message: "User is not logged in." });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await userModel.findById(decodedToken.userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "User is not logged in." });
        }
        if (user.role !== "admin") {
            return res.status(401).json({ success: false, message: "User is not admin." });
        }
        req.user = user;   
        next();
    } catch (error) {
        console.log(`Error -> ${error}`)
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}