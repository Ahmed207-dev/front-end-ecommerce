import { Link } from "react-router-dom";

export const UserSideBar = () => {
  return (
    <>
      <div
        className="adminsidebar list-group shadow-sm rounded-4 text-center overflow-hidden border-0 p-2 bg-white"
        style={{ width: "240px", height: "100%" }}
      >
        <Link
          to="/user/allorder"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          اداره الطلبات
        </Link>

        <Link
          to="/user/favoriteproudct"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          قاءمه المفضله
        </Link>

        <Link
          to="/user/adress"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          العنوان الشخصي
        </Link>
        <Link
          to="/user/profile"
          className="list-group-item list-group-item-action border-0 py-3 fw-bold text-dark rounded-3 admin-link border-bottom"
        >
          الملف الشخصي
        </Link>
      </div>
    </>
  );
};
