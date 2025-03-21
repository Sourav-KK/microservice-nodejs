import userComm from "../../communicator/userCommunicator";
import { Request, Response } from "express";

const FindAll = async (_req: Request, res: Response) => {
  try {
    const response = await userComm.getAllUser();

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find All users:", error);
    res.status(500).json(error.message);
  }
};

export default FindAll;
