import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DeleteAllCartHook from "../../CustomHook/cart/DeleteAllCartHook";
import { ApplayCouponHook } from "../../CustomHook/cart/ApplayCouponHook";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const CartCheckOut = ({ total }) => {
  const navigate = useNavigate();
  const [handleDelete] = DeleteAllCartHook();
  const [coupounName, onChangecoupounName, onSetName, loading] =
    ApplayCouponHook();

  const handleCheck = () => {
    if (total?._id) {
      navigate("/cart/pay");
    } else {
      toast.warning("اضف منتجات");
    }
  };
  return (
    <>
      <div className="box-cart">
        <div className="inp-cart">
          <input
            value={coupounName}
            onChange={(e) => {
              onChangecoupounName(e.target.value);
            }}
            type="text"
            placeholder="كود الخصم..."
          />
          <button onClick={onSetName}>تطبيق </button>
        </div>
        <div className="value-cart">
          {loading ? (
            <LoadingPage />
          ) : total?.totalPriceAfterDiscount ? (
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ textDecoration: "line-through" }}>
                {total?.totalCartPrice} السعر قبل الخصم
              </span>
              <span>{total?.totalPriceAfterDiscount} السعر بعد الخصم</span>
            </div>
          ) : (
            <div className="value-title">{total?.totalCartPrice || 0} جنيه</div>
          )}
          <button
            style={{ width: "100%", padding: "4px", borderRadius: "10px" }}
            onClick={handleCheck}
          >
            اتمام الشراء
          </button>
          <button
            style={{
              width: "100%",
              padding: "4px",
              borderRadius: "10px",
              backgroundColor: "red",
              border: "none",
            }}
            onClick={handleDelete}
          >
            حذف الكل
          </button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
