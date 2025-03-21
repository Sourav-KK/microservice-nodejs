import axios, { AxiosInstance } from "axios";

interface I_OneUSer {
  fullName: string;
  email: string;
  userName: string;
}

class UserCommunicator {
  private static BASEURL: string = "http://localhost:4000/api";
  userServiceClient: AxiosInstance;

  constructor() {
    this.userServiceClient = axios.create({
      baseURL: UserCommunicator.BASEURL,
    });
  }

  //   methods
  async getOneUser(userID: string): Promise<I_OneUSer> {
    try {
      const response = await this.userServiceClient.get(`/${userID}`);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async getAllUser(): Promise<I_OneUSer[]> {
    try {
      console.log("user communicator get All user");
      const response = await this.userServiceClient.get("/");
      return response.data;
    } catch (error: any) {
      // console.error("error in getAllUser:", error);
      console.error("error in getAllUser:", error.message);
      return error;
    }
  }
}

const userComm = new UserCommunicator();
export default userComm;
