import { Rating } from "react-simple-star-rating";
import AddRateHook from "../../CustomHook/review/AddRateHook";
import { ToastContainer } from "react-toastify";

export const Ratepost = () => {
  const handleRating = (rates) => {
    changeRate(rates);
  };
  const [rate, comment, changeRate, changeComment, onSubmit, user] =
    AddRateHook();

  return (
    <div className="container">
      <div className="d-flex aling-items-center gap-2">
        <p> {user?.name} </p>
        <Rating
          value={rate}
          onClick={handleRating}
          initialValue={3.5}
          allowFraction
          size={30}
          fillColor="#ffc107"
          emptyColor="#e4e5e9"
        />
      </div>
      <div className="container-rate">
        <form action="">
          <textarea
            value={comment}
            onChange={changeComment}
            className="form-rate"
            name=""
            id=""
            placeholder="اضف تعليق..."
          ></textarea>
          <button onClick={onSubmit} type="button" className="btn btn-primary">
            اضف تعليق
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
