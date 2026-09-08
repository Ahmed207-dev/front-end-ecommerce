import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddWishlist,
  DeleteWishlist,
  getAllWishlist,
} from "../../ReduxTollKit/Slice/WishlistSlice";
import { toast } from "react-toastify";

const ProudctCardHook = (items, favProd) => {
  let isFav = favProd.some((fav) => fav === items?._id);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleHeart = async () => {
    if (show) {
      await deleteWishlist().unwrap();
      disptach(getAllWishlist());
    } else {
      await addWishlist();
    }
  };

  useEffect(() => {
    if (isFav) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isFav]);
  const addWishlist = async () => {
    try {
      const resAdd = await dispatch(
        AddWishlist({
          productId: `${items?._id}`,
        }),
      ).unwrap();

      setShow(true);
      if (resAdd?.status === 200) {
        toast.success("تمت الإضافة إلى المفضلة");
      }
    } catch (error) {
      if (error?.status === "fail") {
        toast.warning("سجل دخول اولا");
      } else {
        toast.error("حدث خطا");
      }
    }
  };
  const deleteWishlist = async () => {
    try {
      await dispatch(DeleteWishlist(items?._id)).unwrap();
      setShow(false);
      toast.success("تمت الحذف");
    } catch (error) {
      if (error?.status === "fail") {
        toast.warning("سجل دخول اولا");
      } else {
        toast.error("حدث خطا");
      }
    }
  };
  return [handleHeart, show];
};

export default ProudctCardHook;
