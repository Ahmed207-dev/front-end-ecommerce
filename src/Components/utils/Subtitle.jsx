import { Link } from "react-router-dom";

export const Subtitle = ({ title, btntitle, pathtext }) => {
  return (
    <>
      <div className="d-flex justify-content-between pt-4">
        <div className="sub-tile">{title}</div>
        <Link to={pathtext} style={{ textDecoration: "none" }}>
          {btntitle ? <div className="shopping-now ">{btntitle}</div> : null}
        </Link>
      </div>
    </>
  );
};
