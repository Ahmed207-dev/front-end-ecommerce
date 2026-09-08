import { Link } from "react-router-dom";
import LogInHook from "../../CustomHook/auth/LogInHook";
import { ToastContainer } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
export const LoginPage = () => {
  const [
    email,
    password,
    changeEmail,
    changePassword,
    onSubmit,
    loading,
    isPress,
  ] = LogInHook();
  return (
    <div className="container" style={{ minHeight: "670px" }}>
      <form className="form-login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="form">تسجيل الدخول</label>
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
        <button
          disabled={loading === true && isPress === true}
          onClick={onSubmit}
          type="submit"
          className="btn btn-primary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          تسجيل الدخول
          {loading === true && isPress === true ? (
            <Spinner animation="border" variant="light" role="status"></Spinner>
          ) : null}
        </button>
        <p>
          ليس لديك حساب ؟<Link to="/register"> اضغط هنا</Link>
        </p>
        <p>
          نسيت كلمه المرور ؟<Link to="/user/forget-password"> اضغط هنا</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};
