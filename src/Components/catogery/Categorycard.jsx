import { Link } from "react-router-dom";

const CategoryCard = ({ background, img, title, id }) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-2 my-4 d-flex justify-content-around">
      <div className="allCard mb-3">
        <Link style={{ textDecoration: "none" }} to={`/allCategory/${id}`}>
          <div
            className="categoty-card"
            style={{ backgroundColor: `${background}` }}
          >
            <img alt="zcv" src={img} className="categoty-card-img" />
          </div>
          <p className="categoty-card-text my-2">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
