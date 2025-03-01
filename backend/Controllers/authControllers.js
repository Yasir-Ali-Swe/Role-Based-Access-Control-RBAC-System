import userModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are mandatory" });
        }
        const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = await userModel.create({
            name,
            email,
            password: hashPassword,
            role
        });
        await newUser.save();
        return res.status(201).json({ success: true, message: "User created successfully.", newUser });
    } catch (error) {
        console.log(`Error -> ${error}`)
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist." });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid passwoed." });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
        res.cookie("LoginCookie", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 3600000,
            path: "/"
        });
        return res.status(200).json({ success: true, message: "User logged in successfully.", user, token });

    } catch (error) {
        console.log(`Error -> ${error}`)
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie("LoginCookie", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            path: "/"
        })
        return res.status(200).json({ success: true, message: "User logged out successfully." });

    } catch (error) {
        console.log(`Error -> ${error}`)
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
}