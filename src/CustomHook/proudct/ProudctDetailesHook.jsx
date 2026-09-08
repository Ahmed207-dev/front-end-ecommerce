import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSpecifproudct } from "../../ReduxTollKit/Slice/ProudctSlice";
import { getSpecifCatgorey } from "../../ReduxTollKit/Slice/CategorySlice";
import { getOneBrand } from "../../ReduxTollKit/Slice/BrandSlice";

const ProudctDetailesHook = (ProdId) => {
  const dispatch = useDispatch();
  const oneitem = useSelector((state) => state.proudct);
  const oneCat = useSelector((state) => state.categorey);
  const oneBrand = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(getSpecifproudct(ProdId));
  }, [dispatch, ProdId]);
  //
  let items = oneitem?.record || [];
  //

  const images =
    oneitem?.record?.images?.map((img) => {
      return { org: img };
    }) || [];
  //

  useEffect(() => {
    if (items?.category) dispatch(getSpecifCatgorey(items?.category));
  }, [dispatch, items]);
  useEffect(() => {
    if (items?.brand) dispatch(getOneBrand(items?.brand));
  }, [dispatch, items]);

  //
  return [oneitem.record, images, oneCat.record, oneBrand.record];
};

export default ProudctDetailesHook;
