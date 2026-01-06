// Side effects
import "dotenv/config.js";
// Routes
import articleRoutes from "./routes/article.routes.js";
//Runtime
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
const CLIENT_URL = String(process.env.CLIENT_URL);
const PORT = Number(process.env.PORT);
const MONGODB_URI = String(process.env.MONGODB_URI);
const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(cors({
    origin: CLIENT_URL
}));
app.use("/api", articleRoutes);
// Start server
async function startServer() {
    try {
        await mongoose.connect(MONGODB_URI);
        app.listen(PORT);
        console.log("Server is running");
    }
    catch (error) {
        console.error(`Server error while starting: ${error}`);
    }
}
startServer();
//# sourceMappingURL=app.js.map