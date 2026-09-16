import { NavLink } from "react-router-dom";

export const UserSideBar = () => {
  return (
    <div className="user-sidebar shadow-sm rounded-4 text-center p-2 bg-white">
      <NavLink to="/user/allorder" className="user-link">
        إدارة الطلبات
      </NavLink>

      <NavLink to="/user/favoriteproudct" className="user-link">
        قائمة المفضلة
      </NavLink>

      <NavLink to="/user/adress" className="user-link">
        العنوان الشخصي
      </NavLink>

      <NavLink to="/user/profile" className="user-link">
        الملف الشخصي
      </NavLink>
    </div>
  );
};
