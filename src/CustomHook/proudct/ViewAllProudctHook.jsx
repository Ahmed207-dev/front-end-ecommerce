import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProudctByCatgorey } from "../../ReduxTollKit/Slice/ProudctSlice";

const ViewAllProudctHook = (catId) => {
  let limit = 2;
  const dispatch = useDispatch();
  const getData = async () => {
    await dispatch(
      FetchProudctByCatgorey({
        limit: limit,
        page: "",
        id: catId,
      }),
    );
  };
  useEffect(() => {
    getData();
  }, []);
  const allProudct = useSelector((state) => state.proudct);
  let pageCount = allProudct?.Pagination?.paginationResult?.numberOfPages || 0;
  let getpage = async (page) => {
    await dispatch(
      FetchProudctByCatgorey({
        limit: limit,
        page: page,
        id: catId,
      }),
    );
  };
  return [allProudct, pageCount, getpage];
};

export default ViewAllProudctHook;
