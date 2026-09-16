import { AdminProudctsCard } from "./AdminProudctsCard";
import PaginationPage from "../../Components/utils/PaginationPage";
import ViewAllProudctsAdminHook from "../../CustomHook/admin/ViewAllProudctsAdminHook";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const AdminAllProudcts = () => {
  const [proudcts, status, Pagination, pageCount, getpage, loading] =
    ViewAllProudctsAdminHook();
  return (
    <div>
      <div className="admin-content-text py-2">ادارة جميع المنتجات</div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="products-grid">
          {proudcts?.map((item, i) => (
            <AdminProudctsCard key={i} item={item} />
          ))}
        </div>
      )}
      {proudcts.length >= 1 ? (
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      ) : null}
    </div>
  );
};
