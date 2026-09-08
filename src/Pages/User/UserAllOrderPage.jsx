import { CartItem } from "../../Components/Cart/CartItem";
import { UserAllOrder } from "../../Components/User/UserAllOrder";
import { UserSideBar } from "../../Components/User/UserSideBar";

export const UserAllOrderPage = () => {
  return (
    <>
      <div
        className="container user-response"
        style={{ display: "flex", minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <UserSideBar />
        </div>
        <div style={{ display: "flex", flex: 3, flexDirection: "column" }}>
          <UserAllOrder />
        </div>
      </div>
    </>
  );
};
