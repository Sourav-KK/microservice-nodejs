import { Request, Response } from "express";
import { productDetails } from "../mockData/index";

const FindAll = async (_req: Request, res: Response) => {
  try {
    const response = productDetails;

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find All pdts:", error);
    res.status(500).json(error.message);
  }
};

export default FindAll;
