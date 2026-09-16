import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllOrder,
  specifOrder,
} from "../../ReduxTollKit/Slice/CheckOutSlice";

const AllOrderHook = (id) => {
  const [result, setResult] = useState(0);
  const [allData, setAllData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [specifData, setSpecifData] = useState([]);

  //
  const dispatch = useDispatch();
  const data = useSelector((state) => state.order);

  let limit = 2;
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllOrder({ page: 1, limit: limit }));
      setLoading(false);
    };
    get();
  }, [dispatch]);
  const onpress = async (page) => {
    setLoading(true);
    await dispatch(getAllOrder({ page: page, limit: limit }));
    setLoading(false);
  };
  //
  useEffect(() => {
    if (loading === false) {
      if (data) {
        setResult(data?.status?.results);
        setAllData(data?.records);
        setPagination(data?.status?.paginationResult);
      }
    }
  }, [loading, data]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const res = await dispatch(specifOrder(id));
      if (res) {
        setSpecifData(res?.payload?.data);
      }
      setLoading(false);
    };
    if (id) {
      get();
    }
  }, [dispatch]);

  //

  return [result, allData, pagination, onpress, specifData, loading];
};

export default AllOrderHook;
