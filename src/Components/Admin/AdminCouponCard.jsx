import GetAllCouponHook from "../../CustomHook/coupon/GetAllCouponHook";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CurdCouponHook from "../../CustomHook/coupon/CurdCouponHook";
export const AdminCouponCard = () => {
  const [getAll] = GetAllCouponHook();
  const [onclickDelete] = CurdCouponHook();
  return (
    <>
      {getAll?.map((item) => (
        <div
          key={item?._id}
          className="bg-white rounded-4 shadow-sm p-4 mb-4"
          style={{ color: "gray" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>اسم الكوبون : {item?.name}</p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{ cursor: "pointer", display: "flex", gap: "3px" }}
                onClick={() => {
                  onclickDelete(item._id);
                }}
              >
                <MdOutlineDelete />
                <span>حذف</span>
              </div>

              <Link
                to={`/admin/editcoupon/${item?._id}`}
                style={{
                  textDecoration: "none",
                  color: "gray",
                  display: "flex",
                  gap: "5px",
                }}
              >
                <FaEdit />
                <span>تعديل</span>
              </Link>
            </div>
          </div>
          <div>تاريخ الانتهاء :{item?.expire?.slice(0, 10)} </div>
          <div>نسبه الخصم : {item?.discount}%</div>
        </div>
      ))}
      <ToastContainer />
    </>
  );
};
