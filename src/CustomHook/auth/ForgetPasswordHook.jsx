import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../ReduxTollKit/Slice/AuthenticationSlice";
import { toast } from "react-toastify";
const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const CodeForgetPass = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    if (email === "") {
      toast.error("من فصلك ادخل الايميل");
      return;
    }
    localStorage.setItem("emailUser", email);
    setLoading(true);
    setIsPress(true);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (CodeForgetPass.records.message === "Reset code sent to your email") {
        toast.success("تم ارسال الكود بنجاح");
        setTimeout(() => {
          navigate("/user/verifyCode");
        }, 1500);
      } else if (CodeForgetPass.records.status === "fail") {
        toast.error("لا يوجد حساب مسجل ");
      }
      setIsPress(false);
    }
  }, [loading, CodeForgetPass, isPress]);
  return [email, changeEmail, onSubmit, loading, isPress];
};

export default ForgetPasswordHook;
//
