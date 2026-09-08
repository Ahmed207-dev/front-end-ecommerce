import { AdminAddCategory } from "../../Components/Admin/AdminAddCategory";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AdminAllCategoryPage = () => {
  return (
    <div className="container ">
      <div
        className="categorey"
        style={{ display: "flex", minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminAddCategory />
        </div>
      </div>
    </div>
  );
};
