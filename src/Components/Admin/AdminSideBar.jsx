import { Link } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <div className="admin-sidebar shadow-sm rounded-4 bg-white p-2 mb-3">
      <Link to="/admin/allproudct" className="admin-link active">
        إدارة المنتجات
      </Link>
      <Link to="/admin/allorders" className="admin-link">
        إدارة الطلبات
      </Link>
      <Link to="/admin/addbrand" className="admin-link">
        أضف ماركة
      </Link>
      <Link to="/admin/category" className="admin-link">
        أضف تصنيف
      </Link>
      <Link to="/admin/subcategory" className="admin-link">
        أضف تصنيف فرعي
      </Link>
      <Link to="/admin/addproudcts" className="admin-link">
        أضف منتج
      </Link>
      <Link to="/admin/addcopoun" className="admin-link">
        أضف كوبون
      </Link>
    </div>
  );
};
