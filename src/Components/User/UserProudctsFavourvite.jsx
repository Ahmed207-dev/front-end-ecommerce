import { useDispatch, useSelector } from "react-redux";
import { ProudctsCopmonent } from "../Proudct/ProudctsCopmonent";
import { useEffect } from "react";
import { getAllWishlist } from "../../ReduxTollKit/Slice/WishlistSlice";
export const UserProudctsFavourvite = () => {
  const { allRecords } = useSelector((state) => state.Wishlist);
  const disptach = useDispatch();
  useEffect(() => {
    const get = async () => {
      await disptach(getAllWishlist());
    };
    get();
  }, [disptach]);

  let items = allRecords || [];
  return (
    <>
      <div>
        <div className="admin-content-text p-2">قائمه المفضله</div>
        <div className="d-flex justify-content-start flex-wrap gap-4">
          <ProudctsCopmonent proudcts={items} />
        </div>
      </div>
    </>
  );
};
