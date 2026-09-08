import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon } from "../../ReduxTollKit/Slice/CouponSlice";
//
const GetAllCouponHook = () => {
  const getAll = useSelector((state) => state.coupon);
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };
    get();
  }, [dispatch]);

  return [getAll?.records];
};

export default GetAllCouponHook;
