import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllOrderHook from "../../CustomHook/user/AllOrderHook";
import { AdminSpecifOrder } from "./AdminSpecifOrder";
import ChangeStatusHook from "../../CustomHook/admin/ChangeStatusHook";

export const AdminOrdersDetails = () => {
  const { id } = useParams();
  const [, , , , specifData] = AllOrderHook(id);
  const [handleReq, onClickReq, handleDeliver, onClickDeliver] =
    ChangeStatusHook(id);
  return (
    <>
      <div>
        <div
          className="container admin-contnet-text py-2"
          style={{ fontSize: "27px" }}
        >
          تاريح الطلب # {specifData?.updatedAt?.slice(0, 10)}
        </div>
        {specifData
          ? specifData?.cartItems?.map((item, index) => (
              <AdminSpecifOrder
                key={index}
                item={item}
                num={index}
                specifData={specifData}
              />
            ))
          : null}

        {/*             client               */}

        <div
          className="card border-0 shadow-sm rounded-4 p-4 mb-4"
          style={{ backgroundColor: "#fff", direction: "rtl" }}
        >
          <div className=" mb-3">
            <h5 className="fw-bold text-dark mb-3" style={{ fontSize: "18px" }}>
              تفاصيل العميل
            </h5>

            <div
              className="d-flex flex-column gap-2 text-secondary"
              style={{ fontSize: "15px" }}
            >
              <div>
                الاسم:
                <span className="text-dark fw-medium ms-1">
                  {specifData?.user?.name}
                </span>
              </div>
              <div>
                رقم الهاتف:
                <span className="text-dark fw-medium ms-1" dir="ltr">
                  {specifData?.user?.phone}
                </span>
              </div>
              <div>
                الايميل:
                <span className="text-dark fw-medium ms-1">
                  {specifData?.user?.email}
                </span>
              </div>
            </div>
          </div>

          <hr className="my-3 text-muted opacity-25" />

          <div className="text-center py-2 mb-3">
            <span className="fs-5 fw-bold text-dark">
              المجموع {specifData?.totalOrderPrice} جنيه
            </span>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <select
              onChange={handleReq}
              name="Req"
              className="form-select text-center rounded-3 shadow-none"
              style={{
                maxWidth: "250px",
                height: "42px",
                color: "#6c757d",
                cursor: "pointer",
              }}
              defaultValue=""
            >
              <option value="" disabled hidden>
                حالة الطلب
              </option>
              <option value="0">قيد التنفيذ</option>
              <option value="true">تم </option>
              <option value="false">لم يتم</option>
            </select>

            <button
              onClick={onClickReq}
              className="btn btn-dark rounded-3 px-4 py-2 fw-bold"
              style={{ backgroundColor: "#212529", fontSize: "14px" }}
            >
              حفظ
            </button>
            <select
              onChange={handleDeliver}
              className="form-select text-center rounded-3 shadow-none"
              style={{
                maxWidth: "250px",
                height: "42px",
                color: "#6c757d",
                cursor: "pointer",
              }}
              defaultValue=""
            >
              <option value="0" disabled hidden>
                حالة الدفع
              </option>
              <option value="0">حالة الدفع</option>
              <option value="true">تم </option>
              <option value="false">بم يتم </option>
            </select>

            <button
              onClick={onClickDeliver}
              className="btn btn-dark rounded-3 px-4 py-2 fw-bold"
              style={{ backgroundColor: "#212529", fontSize: "14px" }}
            >
              حفظ
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
