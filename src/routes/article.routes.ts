// Controllers
import { getArticle } from "../controllers/article.controller.js";

// Runtime
import { Router } from "express";

// Middleware
import { validateParamsBody } from "../middleware/article.middleware.js";

const router = Router();

router.get("/articles/:articleId", validateParamsBody, getArticle);

export default router;