import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VerifyCodeHook from "../../CustomHook/auth/VerifyCodeHook";

export const VerfiyCodePage = () => {
  const [code, onChangeCode, onSumbit] = VerifyCodeHook();
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <form className="form-login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="form"> تاكيد الكود</label>
        <div className="mb-3">
          <input
            value={code}
            onChange={onChangeCode}
            type="number"
            className="form-control"
            placeholder=" ادخل الكود..."
          />
        </div>
        <button onClick={onSumbit} type="submit" className="btn btn-primary">
          تاكيد الكود
        </button>
        <p>
          ليس لديك حساب ؟<Link to="/register"> اضغط هنا</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};
