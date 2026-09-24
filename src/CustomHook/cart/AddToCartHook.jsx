import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, getAllCart } from "../../ReduxTollKit/Slice/CartSlice";

const AddToCartHook = (id, oneitem) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.cart);
  const [colorIndex, setColorIndex] = useState(null);
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const saveColor = (index, color) => {
    if (colorIndex === index) {
      setColorIndex(null);
      setColorText("");
    } else {
      setColorIndex(index);
      setColorText(color);
    }
  };
  const addCart = async () => {
    const token = localStorage.getItem("token");
    if (oneitem?.availableColors.length >= 1) {
      if (!token || token === "undefined") {
        toast.error("انت غير مسجل دخول، يرجى تسجيل الدخول أولاً");
        return;
      }

      if (colorText === "") {
        toast.warn("من فضلك اختار لون ");
        return;
      }
    } else {
      setColorText("");
    }

    setLoading(true);
    setIsPress(true);
    await dispatch(
      addToCart({
        productId: id,
        color: colorText,
      }),
    );
    await dispatch(getAllCart());
    setIsPress(false);
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (status?.status) {
        toast.success("تمت الاضافه الي العربه بنجاح");
      } else {
        toast.error("انت غير مسجل دخول، يرجى تسجيل الدخول أولاً");
      }
    }
  }, [loading]);

  return [saveColor, colorIndex, addCart, isPress];
};

export default AddToCartHook;
