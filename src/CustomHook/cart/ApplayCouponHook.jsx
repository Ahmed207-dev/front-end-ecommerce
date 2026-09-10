import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { applayCoupon, getAllCart } from "../../ReduxTollKit/Slice/CartSlice";

export const ApplayCouponHook = () => {
  const dispatch = useDispatch();
  const { status, data, loading } = useSelector((state) => state.cart);
  const [coupounName, setCoupounName] = useState("");
  const onChangecoupounName = (e) => {
    setCoupounName(e);
  };

  const onSetName = async () => {
    if (coupounName === "") {
      toast.warning("من فضلك اكتب اسم الكوبون");
      return;
    }
    const res = await dispatch(
      applayCoupon({ couponName: coupounName }),
    ).unwrap();
    if (res?.status === 200) {
      toast.success("تم تفعيل الكوبون بنجاح");
      setTimeout(async () => {
        await dispatch(getAllCart());
      }, 500);
    } else {
      toast.error("الكوبون خطا او انتهي");
    }
  };

  return [coupounName, onChangecoupounName, onSetName, loading];
};
