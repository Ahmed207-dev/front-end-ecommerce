import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchProudct } from "../../ReduxTollKit/Slice/ProudctSlice";
const ViewHomePageHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { records, status } = useSelector((state) => state.proudct);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(FetchProudct({ limit: 4, page: 1 }));
      setLoading(false);
    };
    get();
  }, [dispatch]);
  const items = records && records.length > 0 ? records.slice(0, 4) : [];

  return [items, status, loading];
};

export default ViewHomePageHook;
