import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUser } from "../../ReduxTollKit/Slice/AuthenticationSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const validationValues = () => {
    if (name === "") {
      toast.error("من فصلك ادخل الاسم");
      return;
    }
    if (email === "") {
      toast.error("من فصلك ادخل الايميل");
      return;
    }
    if (phone.length <= 10) {
      toast.error("من فصلك  ادخل رقم هاتف صحيح ");
      return;
    }
    if (password !== passwordConfirm) {
      toast.error("من فضلك لازم مطابقه الباسورد");
      return;
    }
  };
  const onSubmit = async () => {
    validationValues();
    setLoading(true);
    await dispatch(
      createUser({
        name,
        email,
        password,
        passwordConfirm,
        phone,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (user) {
        if (user?.records?.token) {
          localStorage.setItem("token", user?.records?.token);
          toast.success("تمت الاضافه");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
      const errorMsg = user?.records?.errors?.[0]?.msg;

      if (errorMsg) {
        if (errorMsg === "E-mail already in use") {
          toast.error("الايميل مستخدم بالفعل");
        }
        if (errorMsg === "must be at least 6 chars") {
          toast.error("الباسورد لا يقل عن 6 ارقام");
        }
        if (errorMsg === "accept only egypt phone numbers") {
          toast.error("الرقم مصري فقط");
        }
      }
    }
  }, [loading]);
  return [
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
  ];
};
export default RegisterHook;
