import { useParams } from "react-router-dom";
import ProudctDetailesHook from "../../CustomHook/proudct/ProudctDetailesHook";
import rate from "../../Images/star.png";
import PaginationPage from "../utils/PaginationPage";
import { Rateitem } from "./Rateitem";
import { Ratepost } from "./RatePost";
import AllReviewhook from "../../CustomHook/review/AllReviewhook";
import { ToastContainer } from "react-toastify";
export const RateContainer = () => {
  const { id } = useParams();
  const [res, , loading] = AllReviewhook(id);

  return (
    <div className="container rate-container" style={{ margin: "20px 0" }}>
      <div className=" d-flex">
        <div className="sub-title ">التقيمات</div>
        <img
          className="mt-2"
          src={rate}
          alt=""
          height={`16px`}
          width={`16px`}
        />
        <div className="cat-rate d-inline p-1 pt-2">4.3</div>
        <div className="rate-count d-inline p-1 pt-2">
          ({`${res?.length} تقييمات`})
        </div>
      </div>
      <Ratepost />
      {loading ? (
        <h6>جاري التحميل...</h6>
      ) : res?.length > 0 ? (
        res.map((item, index) => <Rateitem key={index} item={item} />)
      ) : (
        <h6>لا توجد تقييمات</h6>
      )}

      <PaginationPage />
      <ToastContainer />
    </div>
  );
};
