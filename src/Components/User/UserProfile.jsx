import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "./UserProfileCard";
import { restPassword } from "../../ReduxTollKit/Slice/UpdateUserSlice";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConformPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const changOldPass = (e) => {
    setOldPassword(e.target.value);
  };
  const changNewdPass = (e) => {
    setNewPassword(e.target.value);
  };
  const changConfimPass = (e) => {
    setConformPassword(e.target.value);
  };
  const onSubmit = async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      toast.error("اكمل البيانات");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.warning("الباسرود غير متساوي");
      return;
    }
    setLoading(true);
    setIsSubmitted(true);
    await dispatch(
      restPassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmPassword,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (!loading && isSubmitted && res) {
      if (res) {
        if (res?.status?.status === 200) {
          toast.success("تم التغير بنجاح");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else if (res?.record === "Request failed with status code 400") {
          toast.error("حدث خطا او الرقم السري  خطا");
          return;
        }
      }
      setIsSubmitted(false);
    }
  }, [loading, res, isSubmitted]);
  const [showPass, setShowPass] = useState(false);
  const togglePassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <div>
        <div className="admin-content-text py-2">الصفحه الشخصيه</div>
        <div>
          <UserProfileCard />
        </div>
        <div className="admin-content-text py-2">تعديل كلمه السر </div>
        <div className="user-inp-profile">
          <div style={{ position: "relative", width: "fit-content" }}>
            <input
              value={oldPassword}
              onChange={changOldPass}
              type={showPass ? "text" : "password"}
              placeholder="ادخل كلمه المرور القديمه"
              style={{ paddingLeft: "40px" }}
            />
            <span
              onClick={togglePassword}
              className="text-secondary "
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <input
            value={newPassword}
            onChange={changNewdPass}
            type="password"
            placeholder="ادخل كلمه المرور الجديده"
          />
          <input
            value={confirmPassword}
            onChange={changConfimPass}
            type="password"
            placeholder="تاكيد كلمه المرور الجديده"
          />

          <div className="d-flex ">
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "145px",
                height: "45px",
              }}
              onClick={onSubmit}
              className="btn btn-dark text-white p-2 product-cart-add"
            >
              {loading ? <LoadingPage className="laoding-page" /> : null}
              {loading ? null : <span> حفظ كلمه السر</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
