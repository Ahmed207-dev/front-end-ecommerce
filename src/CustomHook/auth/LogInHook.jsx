import { toast } from "react-toastify";
import { logInUser } from "../../ReduxTollKit/Slice/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInHook = () => {
  const dispatch = useDispatch();
  const userLogIn = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const validationValues = () => {
    if (email === "") {
      toast.error("من فصلك ادخل الايميل");
      return;
    }
    if (password === "") {
      toast.error("من فصلك ادخل الباسورد");
      return;
    }
  };
  const onSubmit = async () => {
    validationValues();
    setIsPress(true);
    setLoading(true);
    await dispatch(
      logInUser({
        email,
        password,
      }),
    );
    setLoading(false);
    setIsPress(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (userLogIn) {
        if (userLogIn.records.token) {
          localStorage.setItem("token", userLogIn.records.token);
          localStorage.setItem("user", JSON.stringify(userLogIn.records.data));
          toast.success("تم تسجيل الدخول ");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        if (userLogIn.records.message === "Incorrect email or password") {
          toast.error("الايميل او الباسورد خطا");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
      setLoading(true);
    }
  }, [loading]);
  return [
    email,
    password,
    changeEmail,
    changePassword,
    onSubmit,
    loading,
    isPress,
  ];
};

export default LogInHook;
