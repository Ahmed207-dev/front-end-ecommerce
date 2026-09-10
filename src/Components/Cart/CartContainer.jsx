import { Link, useNavigate } from "react-router-dom";
import GetAllCartHook from "../../CustomHook/cart/GetAllCartHook";
import { CartCheckOut } from "./CartCheckOut";
import { CartItem } from "./CartItem";
import market from "../../Images/markting.png";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";
export const CartContainer = () => {
  const [data, status, loading] = GetAllCartHook();
  const navigate = useNavigate(); //

  //
  return (
    <div className="container container-cart">
      <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
        {loading ? (
          <LoadingPage />
        ) : data?.cartItems?.length >= 1 ? (
          data?.cartItems?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            <img src={market} alt="" />
            <h2
              style={{
                fontWeight: "bold",
              }}
            >
              سله التسوق فارغه
            </h2>
            <h6
              style={{
                color: "gray",
                fontSize: "18px",
              }}
            >
              لم تقم باضافه
            </h6>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "10px",
              }}
              onClick={() => {
                navigate("/allprudcts");
              }}
            >
              ابدا بالتسوق الان
            </button>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CartCheckOut total={data} />
      </div>
    </div>
  );
};
