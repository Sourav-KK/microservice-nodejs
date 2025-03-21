import FindAll from "./findAll";
// import findByCategory from "./findByCategory";
import findOne from "./findOne";

const productContoller = {
  fetchOneProduct: findOne,
  fetchAllPrduct: FindAll,
  // fetchByCategory: findByCategory,
};

export default productContoller
