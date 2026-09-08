import { useEffect } from "react";
import { CategoeryApiPage } from "../../ReduxTollKit/Slice/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  const { records, loading, Pagination } = useSelector(
    (state) => state.categorey,
  );

  useEffect(() => {
    dispatch(CategoeryApiPage({ limit: 5, page: 1 }));
  }, [dispatch]);

  const pageCount = Pagination?.paginationResult?.numberOfPages;

  const getpage = (page) => {
    dispatch(CategoeryApiPage({ limit: 5, page: page }));
  };
  return [records, loading, pageCount, getpage];
};

export default AllCategoryHook;
