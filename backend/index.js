import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./Routers/authRouter.js"
import adminRouter from "./Routers/adminRouter.js"

dotenv.config();
const server = express();
server.use(express.json());
server.use(cookieParser());
server.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log(`error ${error}`)
});
server.use("/api/auth", router);
server.use("/api/admin", adminRouter);
