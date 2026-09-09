import { UserProfile } from "../../Components/User/UserProfile";
import { UserSideBar } from "../../Components/User/UserSideBar";

export const UserProfilePage = () => {
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
          <UserProfile />
        </div>
      </div>
    </>
  );
};
