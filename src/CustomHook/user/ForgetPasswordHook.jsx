import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../ReduxTollKit/Slice/AuthenticationSlice";
const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.address);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
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

  /*   const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      forgetPassword({
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
        console.log(res);
      }
    }
  }, [loading]); */
  return [oldPassword, changOldPass, newPassword, changNewdPass];
};

export default ForgetPasswordHook;
