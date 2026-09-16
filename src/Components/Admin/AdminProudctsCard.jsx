import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteProudct } from "../../ReduxTollKit/Slice/ProudctSlice";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

export const AdminProudctsCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const isconfrim = window.confirm("هل أنت متأكد من حذف هذا المنتج؟");
    if (isconfrim) {
      dispatch(DeleteProudct(item?._id));
    }
  };
  return (
    <>
      <div className="container">
        <div className="card admin-card">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              href=""
              onClick={handleDelete}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                display: "flex",
                gap: "4px",
              }}
            >
              <span>
                <RiDeleteBinLine
                  style={{
                    backgroundColor: "#ff0d0d48",
                    borderRadius: "50%",
                    padding: "3px",
                    color: "#ff0d0da2",
                  }}
                  size={22}
                />
              </span>
              <span className="fw-bold" style={{ color: "#ff0d0da2" }}>
                ازاله
              </span>
            </a>

            <Link
              to={`/admin/edit/${item?._id}`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                display: "flex",
                gap: "4px",
              }}
            >
              <span>
                <MdOutlineEdit
                  style={{
                    backgroundColor: "#0d62ff61",
                    borderRadius: "50%",
                    padding: "3px",
                    color: "#0d62ff",
                  }}
                  size={22}
                />
              </span>
              <span className="fw-bold" style={{ color: "#0d62ff" }}>
                تعديل
              </span>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={`/allprudcts/${item?._id}`}>
              <img src={item?.imageCover} className="card-img-top" alt="..." />
            </Link>
          </div>
          <div
            className="bg-success text-white px-2 py-1 rounded-pill small fw-semibold d-inline-block"
            style={{ width: "fit-content" }}
          >
            الكمية : {item?.ratingsQuantity || 0}
          </div>
          <div className="card-body">
            <p className="card-text"> {item?.title}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              {item?.priceAfterDiscount ? (
                <div
                  className="fw-bold fs-5 text-dark m-2"
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="fs-6 fw-normal"
                    style={{ textDecoration: "line-through" }}
                  >
                    {item?.price}جنيه
                  </span>
                  <span className="fs-5">{item?.priceAfterDiscount} جنيه</span>
                </div>
              ) : (
                <div className="fw-bold fs-5 text-dark">
                  {item?.price} <span className="fs-6 fw-normal">جنيه</span>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
