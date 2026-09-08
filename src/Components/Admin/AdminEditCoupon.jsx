import EditCouponHook from "../../CustomHook/coupon/EditCouponHook";
import { ToastContainer } from "react-toastify";

export const AdminEditCoupon = () => {
  const [
    name,
    date,
    percentage,
    changeName,
    changeDate,
    changepercentage,
    onSubmit,
  ] = EditCouponHook();

  return (
    <>
      <div className="container  py-2">
        <div className="admin-content-text">تعديل كوبون</div>
        <div className="mb-3">
          <input
            value={name}
            onChange={changeName}
            type="text"
            className="inp-admin-catgery"
            placeholder="اسم الكوبون"
          />
        </div>
        <div className="mb-3">
          <input
            value={date}
            onChange={changeDate}
            type="text"
            className="inp-admin-catgery"
            placeholder="تاريخ الانتهاء"
          />
        </div>
        <div className="mb-3">
          <input
            value={percentage}
            onChange={changepercentage}
            type="number"
            className="inp-admin-catgery"
            placeholder="نسبه خصم الكوبون"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={onSubmit} className="btn btn-dark btn-save">
            عدل كوبون
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
