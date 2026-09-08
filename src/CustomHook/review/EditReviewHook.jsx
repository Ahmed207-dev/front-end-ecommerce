import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditReview,
  GetSpecifReview,
} from "../../ReduxTollKit/Slice/ReveiwSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
//  EditReview
const EditReviewHook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dataReview = useSelector((state) => state.review);
  //
  const [rating, setRating] = useState(dataReview?.title || "");
  const [text, setText] = useState(dataReview?.rating || "");
  const [loading, setLoading] = useState(true);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleRateChange = (e) => {
    setRating(e);
  };

  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSpecifReview(id));
  }, [dispatch, id]);
  const data = {
    title: text,
    rating: rating,
  };
  const onSubmit = async () => {
    if (text === "") {
      toast.error("من فضلك ادخل الاسم");
      return;
    }
    if (rating === "") {
      toast.error("من فضلك ادخل التقييم");
      return;
    }
    setLoading(true);
    await dispatch(EditReview({ id, data }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (dataReview.status.status === 200) {
        toast.success("تم التعديل بنجاح");
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      } else {
        toast.error("حدث خطا");
      }
    }
  }, [loading]);
  return [
    dataReview.record,
    rating,
    text,
    handleTextChange,
    handleRateChange,
    onSubmit,
    setRating,
    setText,
  ];
};

export default EditReviewHook;
