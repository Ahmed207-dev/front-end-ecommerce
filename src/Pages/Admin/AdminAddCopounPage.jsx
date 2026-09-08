import { AdminAddCopoun } from "../../Components/Admin/AdminAddCopoun";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AdminAddCopounPage = () => {
  return (
    <>
      <div className="container" style={{ display: "flex" }}>
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
