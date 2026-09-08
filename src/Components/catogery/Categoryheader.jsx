import { Link } from "react-router-dom";
import AllCategoryHook from "../../CustomHook/Catgoery/AllCategoryHook";

export const Categoryheader = () => {
  const [records, loading] = AllCategoryHook();

  return (
    <div className="cat-header">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-start py-2 flex-wrap col">
            <div className="cat-text-header ">الكل</div>

            {records?.map((item) => (
              <Link
                key={item?._id}
                to={`/allCategory/${item?._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="cat-text-header">{item?.name}</div>
              </Link>
            ))}
            <Link to={`/allCategory`} style={{ textDecoration: "none" }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
