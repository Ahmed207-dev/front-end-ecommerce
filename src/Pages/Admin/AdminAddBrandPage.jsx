import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import { AdminAddBrand } from "../../Components/Admin/AdminAddBrand";

export const AdminAddBrandPage = () => {
  return (
    <div
      className="container user-response"
      style={{ display: "flex", minHeight: "670px" }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <AdminSideBar />
      </div>
      <div style={{ display: "flex", flex: 3 }}>
        <AdminAddBrand />
      </div>
    </div>
  );
};
