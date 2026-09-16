import { AdminAddCopoun } from "../../Components/Admin/AdminAddCopoun";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AdminAddCopounPage = () => {
  return (
    <>
      <div
        className="container user-response"
        style={{ display: "flex", minHeight: "670xp" }}
      >
        <div style={{ flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ flex: 3 }}>
          <AdminAddCopoun />
        </div>
      </div>
    </>
  );
};
