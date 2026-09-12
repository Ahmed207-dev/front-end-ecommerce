import { useState } from "react";
import CheckOutHook from "../../CustomHook/checkout/CheckOutHook";
import { toast, ToastContainer } from "react-toastify";
import GetAllCartHook from "../../CustomHook/cart/GetAllCartHook";
import CardCheckOutHook from "../../CustomHook/checkout/CardCheckOutHook";

export const ChoosePay = () => {
  const [data, SaveOption, handlePayCash, selectOption] = CheckOutHook();
  const [show, setShow] = useState("");
  const [handlePayCard] = CardCheckOutHook();

  const handleClick = (e) => {
    setShow(e.target.value);
  };

  const changeMethod = () => {
    if (show === "cash") {
      handlePayCash();
    } else if (show === "card") {
      handlePayCard();
    } else {
      toast.warning("من فضلك ادخل طريقه الدفع");
    }
  };

  const [cartItems] = GetAllCartHook();
  //
  return (
    <>
      <div>
        <div className="admin-content-text mt-2">اختر طريقه الدفع </div>
        <div className="choose-pay">
          <div className="box-choose-pay">
            <input
              type="radio"
              id="pay-card"
              name="paymentMethod"
              onChange={handleClick}
              value="card"
            />
            <label htmlFor="pay-card">الدفع عن طريق البطاقه </label>
          </div>
          <div className="box-choose-pay">
            <input
              type="radio"
              id="pay-cash"
              name="paymentMethod"
              onChange={handleClick}
              value="cash"
            />
            <label htmlFor="pay-cash">الدفع عند الاستلام</label>
          </div>
          <div className="drop-down">
            <select
              value={selectOption}
              name="category"
              id="cat"
              style={{ width: "50%", padding: "5px" }}
              onChange={SaveOption}
            >
              <option value="0">اختر العنوان</option>
              {data?.map((item, i) => (
                <option key={i} value={item._id}>
                  {item.alias}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="inp-choose-pay">
        <div className="value-choose">
          {cartItems?.totalPriceAfterDiscount ? (
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ textDecoration: "line-through" }}>
                {cartItems?.totalCartPrice}
              </span>
              <span>السعر بعد الخصم{cartItems?.totalPriceAfterDiscount} </span>
            </div>
          ) : (
            cartItems?.totalCartPrice
          )}
        </div>
        <button onClick={changeMethod}>اتمام الشراء</button>
      </div>
      <ToastContainer />
    </>
  );
};
