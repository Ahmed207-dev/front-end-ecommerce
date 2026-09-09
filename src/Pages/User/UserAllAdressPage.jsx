import { UserAllAdress } from "../../Components/User/UserAllAdress";
import { UserSideBar } from "../../Components/User/UserSideBar";

export const UserAllAdressPage = () => {
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
          <UserAllAdress />
        </div>
      </div>
    </>
  );
};
