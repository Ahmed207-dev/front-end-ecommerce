import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import { AdminEditCoupon } from "../../Components/Admin/AdminEditCoupon";

export const AdminEditCouponPage = () => {
  return (
    <>
      <div className="container  d-lg-flex py-2">
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminEditCoupon />
        </div>
      </div>
    </>
  );
};
