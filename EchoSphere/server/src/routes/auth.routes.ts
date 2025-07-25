import e from "express";

const authRouter = e.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/forget-password", forgetPassword);
authRouter.post("/forget-password", verifyEmail);
