import { AdminAllProudcts } from "../../Components/Admin/AdminAllProudcts";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import PaginationPage from "../../Components/utils/PaginationPage";
import ViewAllProudctsAdminHook from "../../CustomHook/admin/ViewAllProudctsAdminHook";

export const AdminAllProudct = () => {
  const [proudcts, status, Pagination, pageCount, getpage] =
    ViewAllProudctsAdminHook();

  return (
    <>
      <div className="container d-flex py-2 flex-wrap">
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminAllProudcts proudcts={proudcts} />
        </div>
      </div>
      <PaginationPage pageCount={pageCount} onpress={getpage} />
    </>
  );
};
