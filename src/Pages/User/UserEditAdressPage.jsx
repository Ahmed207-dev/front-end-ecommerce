import { UserEditAdress } from "../../Components/User/UserEditAdress";
import { UserSideBar } from "../../Components/User/UserSideBar";

export const UserEditAdressPage = () => {
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
          <UserEditAdress />
        </div>
      </div>
    </>
  );
};
