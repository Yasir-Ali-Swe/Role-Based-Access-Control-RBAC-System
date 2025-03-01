import express from "express";
import { verifyIsAdmin } from "../Middelwear/verifyIsAdmin.js";
import { getAllUsers } from "../Controllers/adminController.js";

const router = express.Router();

router.get("/getAllUsers",verifyIsAdmin,getAllUsers);

export default router;