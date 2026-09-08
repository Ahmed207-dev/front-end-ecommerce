import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWishlist } from "../../ReduxTollKit/Slice/WishlistSlice";
const ProudctComponentHook = () => {
  const [favProd, setFavProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const disptach = useDispatch();
  const { allRecords } = useSelector((state) => state.Wishlist);
  useEffect(() => {
    const get = async () => {
      const token = localStorage.getItem("token");
      setLoading(true);
      if (token) {
        await disptach(getAllWishlist());
      }
      setLoading(false);
    };
    get();
  }, [disptach]);
  useEffect(() => {
    if (loading === false) {
      setFavProd(allRecords.map((item) => item._id));
    }
  }, [loading]);
  return [favProd];
};

export default ProudctComponentHook;
