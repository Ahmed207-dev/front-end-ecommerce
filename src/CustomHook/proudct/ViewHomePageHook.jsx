import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProudct } from "../../ReduxTollKit/Slice/ProudctSlice";
const ViewHomePageHook = () => {
  const dispatch = useDispatch();
  const { records, status } = useSelector((state) => state.proudct);
  useEffect(() => {
    dispatch(FetchProudct({ limit: 4, page: 1 }));
  }, [dispatch]);
  const items = records && records.length > 0 ? records.slice(0, 4) : [];

  return [items, status];
};

export default ViewHomePageHook;
