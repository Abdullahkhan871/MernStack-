import { Response } from "express";

const customeResponse = <T>(
  res: Response,
  message: string = "",
  status: number = 200,
  success: boolean = true,
  data: any = []
) => {
  return res.status(status).json({ message, success, data });
};

export { customeResponse };
