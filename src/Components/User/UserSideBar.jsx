import { Link } from "react-router-dom";

export const UserSideBar = () => {
  return (
    <div className="user-sidebar shadow-sm rounded-4 text-center p-2 bg-white">
      <Link to="/user/allorder" className="user-link">
        إدارة الطلبات
      </Link>

      <Link to="/user/favoriteproudct" className="user-link">
        قائمة المفضلة
      </Link>

      <Link to="/user/adress" className="user-link">
        العنوان الشخصي
      </Link>

      <Link to="/user/profile" className="user-link">
        الملف الشخصي
      </Link>
    </div>
  );
};
