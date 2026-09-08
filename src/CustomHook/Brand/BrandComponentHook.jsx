import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchBrand } from "../../ReduxTollKit/Slice/BrandSlice";

const BrandComponentHook = () => {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state) => state.brand);

  useEffect(() => {
    if (records) {
      dispatch(FetchBrand());
    }
  }, [dispatch]);
  return [records, loading];
};

export default BrandComponentHook;
