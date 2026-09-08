import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddReview } from "../../ReduxTollKit/Slice/ReveiwSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AddRateHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.review);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const changeRate = (val) => {
    setRate(val);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  let user = JSON.parse(localStorage.getItem("user")) || "";

  const onSubmit = async () => {
    if (comment === "") {
      toast.error("من فضلك اكتب تعليق ");
      return;
    }
    const data = { title: comment, rating: rate };
    setLoading(true);
    await dispatch(AddReview({ id, data }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (status) {
        if (status === 201) {
          toast.success("تمت اضافه التعليق بنجاح");
          setTimeout(() => {
            window.location.reload(true);
          }, 1500);
        } else {
          toast.error("لم تمت الاضافه حدث خطا");
        }
      }
    }
  }, [loading]);

  return [rate, comment, changeRate, changeComment, onSubmit, user];
};

export default AddRateHook;
