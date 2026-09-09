import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import { AdminSubCategory } from "../../Components/Admin/AdminSubCategory";

export const AdminSubCategoryPage = () => {
  return (
    <div>
      <div
        className="container user-response"
        style={{ display: "flex", minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminSubCategory />
        </div>
      </div>
    </div>
  );
};
