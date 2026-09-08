import { Link } from "react-router-dom";
import ResetPasswordHook from "../../CustomHook/auth/ResetPasswordHook";
import { ToastContainer } from "react-toastify";

export const ResetPasswordPage = () => {
  const [
    newPassword,
    confirmPassword,
    onChangePassowrd,
    changeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <form className="form-login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="form"> تغيير كلمه المرور</label>
        <div className="mb-3">
          <input
            value={newPassword}
            onChange={onChangePassowrd}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="كلمه السر الجديده..."
          />
        </div>
        <div className="mb-3">
          <input
            value={confirmPassword}
            onChange={changeConfirmPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="تاكيد كلمه السر..."
          />
        </div>
        <button onClick={onSubmit} type="submit" className="btn btn-primary">
          تغيير الباسورد
        </button>
        <p>
          ليس لديك حساب ؟<Link to="/register"> اضغط هنا</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};
