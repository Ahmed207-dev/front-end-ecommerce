import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchProudct } from "../../ReduxTollKit/Slice/ProudctSlice";

const ViewAllProudctsAdminHook = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { proudcts, status, Pagination } = useSelector(
    (state) => state.proudct,
  );
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(FetchProudct({ limit: 3, page: "" }));
      setLoading(false);
    };
    get();
  }, [dispatch]);

  //
  const pageCount = Pagination?.paginationResult?.numberOfPages || 0;

  const getpage = async (page) => {
    await dispatch(FetchProudct({ limit: 3, page: page }));
  };

  return [proudcts, status, Pagination, pageCount, getpage, loading];
};

export default ViewAllProudctsAdminHook;
