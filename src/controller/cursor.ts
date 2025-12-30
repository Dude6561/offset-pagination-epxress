import { db } from "../connection";
import { Request, Response } from "express";
export const page = async (req: Request, res: Response) => {
  const limit = req.query.limit;
  const cursor = { created_at: req.query.created_at, id: req.query.id };
  const result = await db.query.users.findMany();
  return res.status(200).json(result);
};
