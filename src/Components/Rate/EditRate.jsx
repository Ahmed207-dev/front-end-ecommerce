import { Rating } from "react-simple-star-rating";
import EditReviewHook from "../../CustomHook/review/EditReviewHook";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export const EditRate = () => {
  const [
    dataReview,
    rating,
    text,
    handleTextChange,
    handleRateChange,
    onSubmit,
    setRating,
    setText,
  ] = EditReviewHook();
  useEffect(() => {
    if (dataReview) {
      setText(dataReview.title || "");
      setRating(dataReview.rating || 0);
    }
  }, [dataReview]);
  return (
    <>
      <div className="container Edit-Review">
        <div className="">
          <Rating
            onClick={handleRateChange}
            initialValue={rating}
            allowFraction
            size={30}
            fillColor="#ffc107"
            emptyColor="#e4e5e9"
          />
        </div>
        <div>
          <input onChange={handleTextChange} value={text} type="text" />
        </div>
        <div>
          <button onClick={onSubmit}>حفظ التعديل</button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
