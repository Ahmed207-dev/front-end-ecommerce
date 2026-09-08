import { useEffect } from "react";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const HomeCatgoeryHook = () => {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state) => state.categorey);

  useEffect(() => {
    dispatch(CategoeryApi());
  }, [dispatch]);

  const backgroundColor = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#0034FF",
    "#FFD3E8",
  ];
  return [records, backgroundColor, loading];
};
export default HomeCatgoeryHook;
