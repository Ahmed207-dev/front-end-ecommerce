import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProudct } from "../../ReduxTollKit/Slice/ProudctSlice";

const ViewAllProudctsAdminHook = () => {
  const dispatch = useDispatch();
  const { proudcts, status, Pagination } = useSelector(
    (state) => state.proudct,
  );
  useEffect(() => {
    dispatch(FetchProudct({ limit: 2, page: 1 }));
  }, [dispatch]);
  //
  const pageCount = Pagination?.paginationResult?.numberOfPages || 0;

  const getpage = async (page) => {
    await dispatch(FetchProudct({ limit: 2, page: page }));
  };
  console.log(proudcts);

  return [proudcts, status, Pagination, pageCount, getpage];
};

export default ViewAllProudctsAdminHook;
