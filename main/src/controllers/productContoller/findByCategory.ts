// import pdtComm from "../../communicator/productCommunicator";
// import { Request, Response } from "express";

// const findByCategory = async (req: Request, res: Response) => {
//   try {
//     const category = req.params.category;

//     const response = await pdtComm.getProductsByCategory(category);

//     res.status(200).json(response);
//   } catch (error: any) {
//     console.error("error in fetching data from findByCategory pdts:", error);
//     res.status(500).json(error.message);
//   }
// };

// export default findByCategory;
