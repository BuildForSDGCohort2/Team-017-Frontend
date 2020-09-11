import { SingleProduct } from "../components";

export default {
  exact: true,
  name: "Product-OurApp",
  protected: false,
  path: "/product/:id",
  component: SingleProduct,
};
