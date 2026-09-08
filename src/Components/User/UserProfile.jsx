import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "./UserProfileCard";
import { restPassword } from "../../ReduxTollKit/Slice/UpdateUserSlice";
import { toast } from "react-toastify";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.profile);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConformPassword] = useState("");
  const [loading, setLoading] = useState(true);
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

    setLoading(true);
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
    if (loading === false) {
      if (res) {
        if (res?.status?.status === 200) {
          toast.success("تم التغغير بنجاح");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    }
  }, [loading]);
  return (
    <>
      <div>
        <div className="admin-content-text py-2">الصفحه الشخصيه</div>
        <div>
          <UserProfileCard />
        </div>
        <div className="admin-content-text py-2">تعديل كلمه السر </div>
        <div className="user-inp-profile">
          <input
            value={oldPassword}
            onChange={changOldPass}
            type="password"
            placeholder="ادخل كلمه المرور القديمه"
          />
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
            placeholder="تاكيد كلمه المرور القديمه"
          />

          <div className="d-flex ">
            <button onClick={onSubmit} className="btn btn-dark  ">
              حفظ كلمه السر
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
