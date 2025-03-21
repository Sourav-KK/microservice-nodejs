import { Request, Response } from "express";
import { I_OneUSer, userData } from "../mockData/index";

const userFind = (userID: string): I_OneUSer | undefined => {
  const user = userData.find((val) => val.id === Number(userID));
  return user;
};

const FindOne = async (req: Request, res: Response) => {
  try {
    const userID = req.params.id;
    console.log("userID:", userID);
    const response = userFind(userID);

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find one user:", error);
    res.status(500).json(error.message);
  }
};

export default FindOne;
