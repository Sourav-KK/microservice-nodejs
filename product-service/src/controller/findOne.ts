import { Request, Response } from "express";
import { productDetails, I_product } from "../mockData/index";

const FindPDT = (vehicleVal: string): I_product | undefined => {
  console.log("vehicleVal:", vehicleVal);

  const product = productDetails.find((val) => {
    return val.color === vehicleVal;
  });
  console.log("vehicle:", product);
  return product;
};

const findOne = async (req: Request, res: Response) => {
  try {
    const vehicle = req.params.vehicle;
    console.log("vehicle:0", vehicle);

    const response = FindPDT(vehicle);
    console.log("response:", response);

    if (!response) {
      // If no matching product was found, send a 404 response
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(response);
  } catch (error: any) {
    console.error("error in fetching data from find one pdts:", error);
    res.status(500).json(error.message);
  }
};

export default findOne;
