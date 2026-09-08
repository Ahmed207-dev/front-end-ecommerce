import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  ChangeStatus,
  ChangeStatusDeliver,
} from "../../ReduxTollKit/Slice/CheckOutSlice";
const ChangeStatusHook = (id) => {
  const [pay, setPay] = useState(0);
  const [deliver, setDeliver] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleReq = (e) => {
    setPay(e.target.value);
  };
  //
  const handleDeliver = (e) => {
    setDeliver(e.target.value);
  };

  const onClickReq = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(ChangeStatus(id));
      setLoading(false);
    }
  };
  //
  const onClickDeliver = async () => {
    if (deliver === "true") {
      setLoading(true);
      await dispatch(ChangeStatusDeliver(id));
      setLoading(false);
    }
  };
  //
  const payRes = useSelector((state) => state.order);
  useEffect(() => {
    if (loading === false) {
      if (payRes?.status) {
        console.log(payRes?.status);
        if (payRes?.status?.status === 200) {
          toast.success("تم الدفع");
          setTimeout(() => {
            window.location.reload(true);
          }, 1500);
        }
      }
    }
  }, [loading]);

  return [handleReq, onClickReq, handleDeliver, onClickDeliver];
};
// ChangeStatus
export default ChangeStatusHook;
