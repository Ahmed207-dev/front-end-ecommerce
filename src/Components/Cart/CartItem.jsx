import DeleteAllCartHook from "../../CustomHook/cart/DeleteAllCartHook";
import updateCartHook from "../../CustomHook/cart/updateCartHook";
import { ToastContainer, toast } from "react-toastify";

export const CartItem = ({ item }) => {
  const [handleDelete, deleteItem] = DeleteAllCartHook();
  const [qty, onChangeQunatity, onSubmit] = updateCartHook(item);

  return (
    <>
      <div
        className="card border-0 shadow-sm rounded-4 p-3 mb-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="d-flex justify-content-between align-items-stretch">
          <div className="d-flex gap-3 align-items-start">
            <img
              src={item?.product?.imageCover} //
              alt="mobile"
              style={{ width: "90px", height: "130px", objectFit: "contain" }}
            />

            <div className="d-flex flex-column ">
              <span className="text-secondary small mb-1">
                {item?.product?.category?.name}
              </span>

              <h6
                className="fw-bold mb-1"
                style={{ fontSize: "15px", color: "#333" }}
              >
                {item?.product?.title}
              </h6>

              <span className="text-secondary small mb-2">
                الماركة :
                <strong className="text-dark">
                  {item?.product?.brand?.name}
                </strong>
              </span>

              <div
                className="rounded-circle mb-3"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: item?.color,
                  cursor: "pointer",
                }}
              ></div>

              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary small">الكميه</span>
                <input
                  type="number"
                  value={qty}
                  onChange={onChangeQunatity}
                  className="form-control text-center p-1"
                  style={{ width: "50px", height: "32px", fontSize: "14px" }}
                />
                <button
                  onClick={onSubmit}
                  type="button"
                  className="btn btn-dark"
                >
                  تطبيق
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-between align-items-end">
            <button className="btn btn-link text-secondary p-0 text-decoration-none d-flex align-items-center gap-1">
              <i className="bi bi-trash fs-6"></i>
              <span
                onClick={() => {
                  deleteItem(item?._id);
                }}
                className="small"
              >
                ازاله
              </span>
            </button>

            <div className="d-flex align-items-baseline gap-1">
              <span className="fw-bold fs-5 text-dark">{item?.price}</span>
              <span className="text-secondary small">جنية</span>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
