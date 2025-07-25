import { Request, Response } from "express";

const signUp = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
  }
};
const login = () => {};
const logout = () => {};
const forgetPassword = () => {};
const verifyEmail = () => {};

const addPhone = () => {};
const addProfilePic = () => {};
const addStatus = () => {};
