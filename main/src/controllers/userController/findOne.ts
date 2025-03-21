import userComm from "../../communicator/userCommunicator";
import { Request, Response } from "express";

const FindOne = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;
    const response = await userComm.getOneUser(userID);

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find one user:", error);
    res.status(500).json(error.message);
  }
};

export default FindOne;
