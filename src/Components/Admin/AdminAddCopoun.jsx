import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../CustomHook/coupon/AddCouponHook";
import { AdminCouponCard } from "./AdminCouponCard";
export const AdminAddCopoun = () => {
  const dataRef = useRef();
  const [
    name,
    date,
    percentage,
    changeName,
    changeDate,
    changepercentage,
    onSubmit,
  ] = AddCouponHook();

  return (
    <>
      <div className="container  py-2">
        <div className="admin-content-text"> اضف كوبون </div>
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
            ref={dataRef}
            type="text"
            className="inp-admin-catgery"
            placeholder="تاريخ الانتهاء"
            onFocus={() => {
              dataRef.current.type = "date";
            }}
            onBlur={() => {
              dataRef.current.type = "text";
            }}
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
            اضافه كوبون
          </button>
        </div>
        <AdminCouponCard />
        <ToastContainer />
      </div>
    </>
  );
};
