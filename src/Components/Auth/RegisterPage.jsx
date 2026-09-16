import { Link } from "react-router-dom";
import RegisterHook from "../../CustomHook/auth/RegisterHook";
import { ToastContainer } from "react-toastify";

export const RegisterPage = () => {
  const [
    name,
    email,
    password,
    passwordConfirm,
    phone,
    changeName,
    changeEmail,
    changePassword,
    changePasswordConfirm,
    changePhone,
    onSubmit,
  ] = RegisterHook();
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <div className="login-page">
        <form className="form-login" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="form">تسجيل حساب جديد</label>
          <div className="mb-3">
            <input
              value={name}
              onChange={changeName}
              type="text"
              className="form-control"
              placeholder="اسم المستخدم..."
            />
          </div>
          <div className="mb-3">
            <input
              value={email}
              onChange={changeEmail}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="الايميل..."
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              onChange={changePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="كلمه السر..."
            />
          </div>
          <div className="mb-3">
            <input
              value={passwordConfirm}
              onChange={changePasswordConfirm}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="ناكيد كلمه السر..."
            />
          </div>
          <div className="mb-3">
            <input
              value={phone}
              onChange={changePhone}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="  رقم الهاتف..."
            />
          </div>
          <button
            onClick={onSubmit}
            type="submit"
            className="btn btn-dark text-white p-2 product-cart-add"
          >
            تسجيل الحساب
          </button>
          <p>
            لديك حساب بالفعل ؟<Link to="/login"> اضغط هنا</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
