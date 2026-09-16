import { Link, NavLink } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <div className="admin-sidebar shadow-sm rounded-4 bg-white p-2 mb-3">
      <NavLink to="/admin/allproudct" className="admin-link" end>
        إدارة المنتجات
      </NavLink>
      <NavLink to="/admin/allorders" className="admin-link">
        إدارة الطلبات
      </NavLink>
      <NavLink to="/admin/addbrand" className="admin-link">
        أضف ماركة
      </NavLink>
      <NavLink to="/admin/category" className="admin-link">
        أضف تصنيف
      </NavLink>
      <NavLink to="/admin/subcategory" className="admin-link">
        أضف تصنيف فرعي
      </NavLink>
      <NavLink to="/admin/addproudcts" className="admin-link">
        أضف منتج
      </NavLink>
      <NavLink to="/admin/addcopoun" className="admin-link">
        أضف كوبون
      </NavLink>
    </div>
  );
};
