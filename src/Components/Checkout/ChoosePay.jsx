import { useState } from "react";
import CheckOutHook from "../../CustomHook/checkout/CheckOutHook";
import { toast, ToastContainer } from "react-toastify";
import GetAllCartHook from "../../CustomHook/cart/GetAllCartHook";
import CardCheckOutHook from "../../CustomHook/checkout/CardCheckOutHook";
import UserAddAdressHook from "../../CustomHook/user/UserAddAdressHook";
import { useDispatch } from "react-redux";
import visa from "../../Images/visa.jpg";
import cash from "../../Images/delivery.jpg";
export const ChoosePay = () => {
  const dispatch = useDispatch();
  const [data, SaveOption, handlePayCash, selectOption, , , getAllAdress] =
    CheckOutHook();
  const [show, setShow] = useState("");
  const [handlePayCard] = CardCheckOutHook();
  const [showpop, setShowPop] = useState(false);

  const [
    address,
    fullAddress,
    phone,
    changAddress,
    changefullAddress,
    changePhone,
    onSubmit,
  ] = UserAddAdressHook();

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

  const handleAddAdress = async () => {
    await onSubmit();

    if (getAllAdress) {
      await dispatch(getAllAdress());
    }

    setShowPop(false);
  };
  //
  return (
    <>
      <div className="pay-page-container d-flex justify-content-between align-items-start gap-4 py-4 user-response">
        <div className="py-2 my-2">
          <div className="pay-main-content flex-grow-1">
            <h2 style={{ fontWeight: "bold" }}> اختر طريقه الدفع</h2>

            <div className="container-inp-pay">
              <div
                className={` box-choose-pay d-flex  align-items-center gap-2 inp-pay ${show === "card" ? "inp-pay-active" : ""} `}
              >
                <h3> الدفع عن طريق بطاقه</h3>
                <img src={visa} alt="" style={{ width: "80px" }} />
                <input
                  type="radio"
                  id="pay-card"
                  name="paymentMethod"
                  onChange={handleClick}
                  value="card"
                />
              </div>
              <div
                className={` box-choose-pay d-flex  align-items-center gap-2 inp-pay ${show === "cash" ? "inp-pay-active" : ""} `}
              >
                <h3> الدفع عن طريق بطاقه</h3>
                <img src={cash} alt="" style={{ width: "80px" }} />
                <input
                  type="radio"
                  id="pay-cash"
                  name="paymentMethod"
                  onChange={handleClick}
                  value="cash"
                />
              </div>

              <h2 style={{ fontWeight: "bold" }}>عنوان التوصيل</h2>

              <div className="drop-down d-flex gap-4 user-response">
                <select
                  value={selectOption}
                  name="category"
                  id="cat"
                  style={{ width: "300px", padding: "8px", margin: "2px" }}
                  onChange={SaveOption}
                >
                  <option value="0">اختر العنوان</option>
                  {data?.map((item, i) => (
                    <option key={i} value={item._id}>
                      {item.alias}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowPop(true)}
                  className="btn btn-warning "
                  style={{ width: "200px" }}
                >
                  + اضافه عنوان جديد
                </button>
                {showpop && (
                  <div className="user-modal-overlay">
                    <div className="user-modal-container">
                      <div>
                        <h3>اضف عنوان شخصي </h3>
                      </div>
                      <div className="user-modal">
                        <input
                          type="text"
                          placeholder="اسم العنوان"
                          value={address}
                          onChange={changAddress}
                        />
                        <input
                          type="text"
                          placeholder="العنوان بالتفصيل"
                          value={fullAddress}
                          onChange={changefullAddress}
                        />
                        <input
                          type="number"
                          placeholder="رقم الهاتف"
                          value={phone}
                          onChange={changePhone}
                        />
                      </div>
                      <div>
                        <button onClick={() => setShowPop(false)}>تراجع</button>
                        <button onClick={handleAddAdress}>اضافه التعديل</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="order-summary-card">
          <h3 className="summary-title">ملخص الطلب</h3>

          <div className="summary-row">
            <span className="summary-label">المجموع الكلي</span>
            <span className="summary-value">
              {cartItems?.totalCartPrice || 0} ج.م.
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-label">الخصم</span>
            <span className="summary-value">
              {cartItems?.totalPriceAfterDiscount
                ? `${cartItems.totalCartPrice - cartItems.totalPriceAfterDiscount} ج.م.`
                : "0 ج.م."}
            </span>
          </div>

          <hr className="summary-divider" />

          <div className="total-price-section">
            <span className="total-label">المجموع الكلي</span>
            <div className="total-amount">
              {cartItems?.totalPriceAfterDiscount
                ? cartItems.totalPriceAfterDiscount
                : cartItems?.totalCartPrice || 0}
              ج.م.
            </div>
          </div>

          <button className="checkout-btn" onClick={changeMethod}>
            إتمام الشراء
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
