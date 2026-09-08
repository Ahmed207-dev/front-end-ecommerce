import { useEffect, useState } from "react";
import { updateQunatity } from "../../ReduxTollKit/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
//
const updateCartHook = (item) => {
  const { records, status } = useSelector((state) => state.cart);
  const [qty, setQty] = useState(item?.quantity || 0);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const onChangeQunatity = (e) => {
    setQty(e.target.value);
  };
  let id = item?._id;
  let data = { quantity: Number(qty) };
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(updateQunatity({ id, data }));

    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (status?.status === 200) {
        toast.success("تم التعديل بنجاح");
        setTimeout(() => {
          window.location.reload(true);
        }, 1500);
      }
    }
  }, [loading]);
  return [qty, onChangeQunatity, onSubmit];
};

export default updateCartHook;
