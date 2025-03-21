import pdtComm from "../../communicator/productCommunicator";
import { Request, Response } from "express";

const FindAll = async (_req: Request, res: Response) => {
  try {
    const response = await pdtComm.getAllProducts();

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find All pdts:", error);
    res.status(500).json(error.message);
  }
};

export default FindAll;
