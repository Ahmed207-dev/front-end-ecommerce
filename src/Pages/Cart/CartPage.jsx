import { CartContainer } from "../../Components/Cart/CartContainer";

export const CartPage = () => {
  return (
    <>
      <div className="container" style={{ minHeight: "670px" }}>
        <div className="admin-content-text py-2"> عربه التسوق</div>
        <CartContainer />
      </div>
    </>
  );
};
