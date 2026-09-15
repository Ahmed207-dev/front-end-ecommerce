import { BrandCard } from "./BrandCard";
import prodImg from "../../Images/images.jfif";
import { FetchBrandPage } from "../../ReduxTollKit/Slice/BrandSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

export const BrandContainer = () => {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state) => state.brand);
  useEffect(() => {
    if (records) {
      dispatch(FetchBrandPage({ limit: 3, page: 1 }));
    }
  }, [dispatch]);

  return (
    <div className="container">
      <div className="admin-content-text my-3 fs-3 ">اشهر الماركات</div>
      <div className="row d-flex my-2 justify-content-between">
        {loading ? (
          <Spinner animation="border" role="status" variant="primary" />
        ) : (
          records?.map((item, i) => <BrandCard key={i} item={item} />)
        )}
      </div>
    </div>
  );
};
