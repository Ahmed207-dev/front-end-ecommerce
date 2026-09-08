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
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onclickDelete(item._id);
                }}
              >
                <MdOutlineDelete />
                <span>حذف</span>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link to={`/admin/editcoupon/${item?._id}`}>
                  <FaEdit style={{ color: "black" }} />
                </Link>
                <span>تعديل</span>
              </div>
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
