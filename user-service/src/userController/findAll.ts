import { Request, Response } from "express";
import { userData } from "../mockData/index";

const FindAll = async (_req: Request, res: Response) => {
  try {
    console.log("in user find all");
    const response = userData;

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find All users:", error);
    res.status(500).json(error.message);
  }
};

export default FindAll;
