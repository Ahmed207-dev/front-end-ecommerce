import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../CustomHook/auth/ForgetPasswordHook";

export const ForgetPasswordPage = () => {
  const [email, changeEmail, onSubmit] = ForgetPasswordHook();
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <form className="form-login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="form"> نسيت كلمه السر</label>
        <div className="mb-3">
          <input
            value={email}
            onChange={changeEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" ادخل الايميل..."
          />
        </div>
        <button onClick={onSubmit} type="submit" className="btn btn-primary">
          ارسال الكود
        </button>
        <p>
          ليس لديك حساب ؟<Link to="/register"> اضغط هنا</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};
