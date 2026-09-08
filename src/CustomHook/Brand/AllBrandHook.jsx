import { useDispatch, useSelector } from "react-redux";
import { FetchBrandPage } from "../../ReduxTollKit/Slice/BrandSlice";

const AllBrandHook = () => {
  const dispatch = useDispatch();
  const { Pagination, loading } = useSelector((state) => state.brand);

  const pageCount = Pagination?.paginationResult?.numberOfPages;

  const getpage = (page) => {
    dispatch(FetchBrandPage({ limit: 3, page: page }));
  };
  return [pageCount, getpage];
};

export default AllBrandHook;
