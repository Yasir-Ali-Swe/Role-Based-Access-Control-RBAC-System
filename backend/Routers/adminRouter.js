import express from "express";
import { verifyIsAdmin } from "../Middelwear/verifyIsAdmin.js";
import { getAllUsers , deleteUser} from "../Controllers/adminController.js";


const router = express.Router();

router.get("/getAllUsers",verifyIsAdmin,getAllUsers);
router.delete("/deleteUser/:id",verifyIsAdmin,deleteUser);
export default router;