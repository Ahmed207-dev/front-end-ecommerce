import { AdminAddproudcts } from "../../Components/Admin/AdminAddproudcts";
import { AdminEditproudcts } from "../../Components/Admin/AdminEditproudcts";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
export const AdminEditProudctPage = () => {
  return (
    <div className="container" style={{ display: "flex", minHeight: "670px" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <AdminSideBar />
      </div>
      <div style={{ display: "flex", flex: 3 }}>
        <AdminEditproudcts />
      </div>
    </div>
  );
};
