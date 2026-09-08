import { UserAddAdress } from "../../Components/User/UserAddAdress";
import { UserSideBar } from "../../Components/User/UserSideBar";

export const UserAddAdreesPage = () => {
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <UserSideBar />
        </div>
        <div style={{ display: "flex", flex: 3, flexDirection: "column" }}>
          <UserAddAdress />
        </div>
      </div>
    </>
  );
};
