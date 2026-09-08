import { toast } from "react-toastify";
import { deleteCoupon } from "../../ReduxTollKit/Slice/CouponSlice";
import { useDispatch, useSelector } from "react-redux";
const CurdCouponHook = () => {
  const dispatch = useDispatch();
  const onclickDelete = (id) => {
    const isConfroim = window.confirm("هل انت متاكد");
    if (isConfroim) {
      dispatch(deleteCoupon(id));
      toast.success("تم الحذف");
    }
  };

  return [onclickDelete];
};

export default CurdCouponHook;
