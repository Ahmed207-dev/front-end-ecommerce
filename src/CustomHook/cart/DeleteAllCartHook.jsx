import { useEffect, useState } from "react";
import {
  deleteAllCart,
  deleteSpecifCart,
  getAllCart,
} from "../../ReduxTollKit/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// deleteSpecifCart
const DeleteAllCartHook = () => {
  const { records, status } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const isConfrim = window.confirm("هل انت متاكد؟");
    if (isConfrim) {
      await dispatch(deleteAllCart()).unwrap();
      dispatch(getAllCart());
    }
  };
  const deleteItem = async (itemId) => {
    const isConfrim = window.confirm("هل انت متاكد؟");
    if (isConfrim) {
      setLoading(true);
      await dispatch(deleteSpecifCart(itemId)).unwrap();
      dispatch(getAllCart());
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading === false) {
      if (status?.status) {
        toast.success("تم الحذف ينجاح");
      }
    }
  }, [loading]);
  return [handleDelete, deleteItem];
};

export default DeleteAllCartHook;
