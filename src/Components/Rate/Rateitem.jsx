import rate from "../../Images/star.png";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteReviewHook from "../../CustomHook/review/DeleteReviewHook";
import EditReviewHook from "../../CustomHook/review/EditReviewHook";

export const Rateitem = ({ item }) => {
  const [show, handleDelete] = DeleteReviewHook(item);
  if (!item) return null;
  return (
    <>
      <div className="container d-flex align-items-center p-2">
        <div className="rate-name">{item?.user?.name || ""}</div>
        <img className="" src={rate} alt="" height={`16px`} width={`16px`} />
        <div className="cat-rate d-inline p-1 pt-2">{item?.rating}</div>
      </div>
      <div className="rate-description ms-2 border-bottom">
        {item?.title || ""}
        {show === true ? (
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
          >
            <MdDelete onClick={handleDelete} size={20} />
            <Link to={`/EditReview/${item._id}`}>
              <FaEdit size={20} />
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};
