import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPassword } from "../../ReduxTollKit/Slice/AuthenticationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const pass = useSelector((state) => state.users);
  const naviagte = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const onChangePassowrd = (e) => {
    setNewPassword(e.target.value);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onSubmit = async () => {
    if (newPassword === "") {
      toast.error("من فضلك ادخل كلمه المرور الجديده");
      return;
    }
    if (newPassword != confirmPassword) {
      toast.error("غير مطابقه");
      return;
    }
    setLoading(true);

    await dispatch(
      resetPassword({
        email: localStorage.getItem("emailUser"),
        newPassword,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading == false) {
      if (pass.records.token) {
        toast.success("تم التغيير بنجاح");
        setTimeout(() => {
          naviagte("/login");
        }, 1500);
      } else {
        toast.success("حدث خطا");
      }
    }
  }, [loading]);
  return [
    newPassword,
    confirmPassword,
    onChangePassowrd,
    changeConfirmPassword,
    onSubmit,
  ];
};
//
export default ResetPasswordHook;
