import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddReview } from "../../ReduxTollKit/Slice/ReveiwSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AllReviewhook from "./AllReviewhook";

const AddRateHook = () => {
  const dispatch = useDispatch();

  const [rate, setRate] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const [, AllReview] = AllReviewhook(id);

  const { status } = useSelector((state) => state.review);

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
          const update = async () => {
            await dispatch(AllReview(id));
          };
          update();
        } else {
          toast.error("لم تمت الاضافه حدث خطا");
        }
      }
    }
  }, [loading]);

  return [rate, comment, changeRate, changeComment, onSubmit, user];
};

export default AddRateHook;
