import findAll from "./findAll";
import findOne from "./findOne";

const userControllers = {
  findAllUsers: findAll,
  findOneUser: findOne,
};

export default userControllers;

export type userControllersType = typeof userControllers;
