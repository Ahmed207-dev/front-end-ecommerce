import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProudctByBrand } from "../../ReduxTollKit/Slice/ProudctSlice";

const ViewAllProudctByBrandHook = (brandId) => {
  let limit = 2;
  const dispatch = useDispatch();
  const getData = async () => {
    await dispatch(
      FetchProudctByBrand({
        limit: limit,
        page: "",
        id: brandId,
      }),
    );
  };
  useEffect(() => {
    if (brandId) {
      getData();
    }
  }, [brandId]);

  const brands = useSelector((state) => state.proudct);
  let pageCount = brands?.Pagination?.paginationResult?.numberOfPages || 0;
  let getpage = async (page) => {
    await dispatch(
      FetchProudctByBrand({
        limit: limit,
        page: page,
        id: brandId,
      }),
    );
  };

  return [brands, pageCount, getpage];
};

export default ViewAllProudctByBrandHook;
