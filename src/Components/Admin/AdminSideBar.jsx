import { Link } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <>
      <div
        className="adminsidebar list-group shadow-sm rounded-4 text-center overflow-hidden border-0 p-2 bg-white"
        style={{ width: "240px", height: "100%" }}
      >
        <Link
          to="/admin/allproudct"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اداره المنتجات
        </Link>

        <Link
          to="/admin/allorders"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اداره الطلبات
        </Link>

        <Link
          to="/admin/addbrand"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اضف ماركه
        </Link>

        <Link
          to="/admin/category"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اضف تصنيف
        </Link>

        <Link
          to="/admin/subcategory"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اضف تصنيف فرعي
        </Link>

        <Link
          to="/admin/addproudcts"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اضف منتج
        </Link>
        <Link
          to="/admin/addcopoun"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اضف كوبون
        </Link>
      </div>
    </>
  );
};
