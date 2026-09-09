import { AdminAllProudcts } from "../../Components/Admin/AdminAllProudcts";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import PaginationPage from "../../Components/utils/PaginationPage";
import ViewAllProudctsAdminHook from "../../CustomHook/admin/ViewAllProudctsAdminHook";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const AdminAllProudct = () => {
  const [proudcts, status, Pagination, pageCount, getpage, loading] =
    ViewAllProudctsAdminHook();

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="container d-flex flex-column flex-md-row py-2">
          <div style={{ minWidth: "0", maxWidth: "100%" }}>
            <AdminSideBar />
          </div>
          <div className="flex-grow-1 ms-md-3" style={{ minWidth: "0" }}>
            <AdminAllProudcts proudcts={proudcts} />
          </div>
        </div>
      )}

      <PaginationPage pageCount={pageCount} onpress={getpage} />
    </>
  );
};
