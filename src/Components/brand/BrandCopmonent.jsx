import { Subtitle } from "../utils/Subtitle";
import { BrandCard } from "./BrandCard";
import { Spinner } from "react-bootstrap";
import BrandComponentHook from "../../CustomHook/Brand/BrandComponentHook";

export const BrandCopmonent = ({ title, btntitle, pathtext }) => {
  const [records, loading] = BrandComponentHook();
  return (
    <>
      <div className="container">
        <Subtitle title={title} btntitle={btntitle} pathtext="allbrand" />

        <div className="row d-flex my-2 justify-content-between">
          {loading ? (
            <div className="d-flex justify-content-center py-2">
              <Spinner
                animation="border"
                role="status"
                variant="primary"
              ></Spinner>
            </div>
          ) : (
            records
              ?.slice(0, 5)
              .map((item, i) => <BrandCard key={i} item={item} />)
          )}
        </div>
      </div>
    </>
  );
};
