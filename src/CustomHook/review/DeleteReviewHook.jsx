import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteReview } from "../../ReduxTollKit/Slice/ReveiwSlice";
import { toast } from "react-toastify";

const DeleteReviewHook = (item) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user._id === item?.user?._id) {
      setShow(true);
    }
  }, [item]);
  const handleDelete = () => {
    const Isconfriom = window.confirm("هل انت متاكد");
    if (Isconfriom) {
      dispatch(DeleteReview(item._id));
      toast.success("تم الحذف");
    }
  };
  return [show, handleDelete];
};

export default DeleteReviewHook;
