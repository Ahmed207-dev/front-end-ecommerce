import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { applayCoupon, getAllCart } from "../../ReduxTollKit/Slice/CartSlice";

export const ApplayCouponHook = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);
  const [coupounName, setCoupounName] = useState("");
  const onChangecoupounName = (e) => {
    setCoupounName(e);
  };
  const onSetName = async () => {
    setLoading(true);
    await dispatch(applayCoupon({ couponName: coupounName }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (status?.status === 200) {
        toast.success("تم تفعيل الكوبون بنجاح");
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      } else {
        toast.error("الكوبون خطا او انتهي");
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      }
    }
  }, [loading]);

  return [coupounName, onChangecoupounName, onSetName];
};
