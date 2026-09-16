import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCode } from "../../ReduxTollKit/Slice/AuthenticationSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyCodeHook = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const codes = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };
  const onSumbit = async () => {
    if (code === "") {
      toast.error("من فضلك ادخل الكود");
      return;
    }
    setLoading(true);
    await dispatch(verifyCode({ resetCode: code }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (codes?.records?.status === "fail") {
        toast.error("الكود غير صحيح");
      } else if (codes?.records?.status === "Success") {
        toast.success("الكود صحيح");
        setTimeout(() => {
          navigate("/user/restPassword");
        }, 1500);
      }
      setLoading(true);
    }
  }, [loading]);
  return [code, onChangeCode, onSumbit, loading];
};

export default VerifyCodeHook;
