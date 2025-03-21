import pdtComm from "../../communicator/productCommunicator";
import { Request, Response } from "express";

const findOne = async (req: Request, res: Response) => {
  try {
    const vehicle = req.params.vehicle;
    console.log("vehicle:",vehicle)

    const response = await pdtComm.getOneProduct(vehicle);

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find one pdts:", error);
    res.status(500).json(error.message);
  }
};

export default findOne;
