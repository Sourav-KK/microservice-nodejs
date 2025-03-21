import axios, { AxiosInstance } from "axios";
import { I_product } from "Types/products";

class ProductCommunicator {
  private static BASEuRL: string = "http://localhost:4001/api";
  productServiceClient: AxiosInstance;

  constructor() {
    this.productServiceClient = axios.create({
      baseURL: ProductCommunicator.BASEuRL,
    });
  }

  //  methods
  async getAllProducts(): Promise<I_product[]> {
    try {
      const response = await this.productServiceClient.get("/");
      return response.data;
    } catch (error: any) {
      console.error("error in getAllProducts ProductCommunicator error", error);
      return error;
    }
  }

  async getOneProduct(vehicle: string): Promise<I_product> {
    try {
      const response = await this.productServiceClient.get(`/${vehicle}`);
      return response.data;
    } catch (error: any) {
      console.error("error in getOneProduct ProductCommunicator error", error);
      return error;
    }
  }

  // async getProductsByCategory(category:string): Promise<I_product[]> {
  //   try {
  //     const response = await this.productServiceClient.get(`/:${category}`);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error("error in getOneProduct ProductCommunicator error", error);
  //     return error;
  //   }
  // }
}

const ProductComm = new ProductCommunicator();

export default ProductComm;
