import e from "express";
import {
  addAboutMe,
  addPhone,
  addProfilePic,
  forgetPassword,
  login,
  logout,
  signUp,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { multerUploads } from "../middleware/multer.middleware.js";

const authRouter = e.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", authMiddleware, logout);
authRouter.post("/add-about-me", authMiddleware, addAboutMe);
authRouter.post("/add-mobile-number", authMiddleware, addPhone);

authRouter.post("/add-profile-pic", authMiddleware, multerUploads, addProfilePic);
authRouter.post("/forget-password", forgetPassword);
authRouter.post("/forget-password", verifyEmail);

export { authRouter };
