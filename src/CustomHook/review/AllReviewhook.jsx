import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllReview } from "../../ReduxTollKit/Slice/ReveiwSlice";

const AllReviewhook = (id) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.review);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(AllReview(id));
    setLoading(false);
  }, [dispatch]);

  return [res.records, AllReview, loading];
};

export default AllReviewhook;
