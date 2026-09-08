import UserAddAdressHook from "../../CustomHook/user/UserAddAdressHook";
import { ToastContainer } from "react-toastify";

export const UserAddAdress = () => {
  const [
    address,
    fullAddress,
    phone,
    changAddress,
    changefullAddress,
    changePhone,
    onSubmit,
  ] = UserAddAdressHook();
  return (
    <>
      <div>
        <div className="admin-content-text py-2 mb-3">اضافه عنوان جديد</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-admin"
          action=""
        >
          <input
            value={address}
            onChange={changAddress}
            type="text"
            placeholder="تسيمه العنوان (المنزل) "
          />
          <textarea
            value={fullAddress}
            onChange={changefullAddress}
            name=""
            id=""
            placeholder="العنوان بالتفصيل"
          ></textarea>
          <input
            value={phone}
            onChange={changePhone}
            type="number"
            placeholder="رقم الهاتف"
          />
          <div className="d-flex justify-content-end">
            <button onClick={onSubmit} className="btn btn-dark  ">
              اضافه العنوان
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
