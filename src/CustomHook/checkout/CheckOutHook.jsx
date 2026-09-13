import { useEffect, useState } from "react";
import AllAddressHook from "../user/AllAddressHook";
import { useDispatch, useSelector } from "react-redux";
import { getSpecifData } from "../../ReduxTollKit/Slice/AddressSlice";
import GetAllCartHook from "../cart/GetAllCartHook";
import { AddOrder } from "../../ReduxTollKit/Slice/CheckOutSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckOutHook = () => {
  const dispatch = useDispatch();
  const [cartItems] = GetAllCartHook();

  const [loadingAddress, setLoadingAddress] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);

  const [address, setAddress] = useState(null);
  const [selectOption, setSelectOption] = useState("0");

  const cartId = cartItems?._id || "";
  const [data, , getAllAdress] = AllAddressHook();
  const navigte = useNavigate();

  const SaveOption = async (e) => {
    const selectedId = e.target.value;
    setSelectOption(selectedId);

    if (selectedId !== "0") {
      setLoadingAddress(true);
      await dispatch(getSpecifData(selectedId));
      setLoadingAddress(false);
    } else {
      setAddress(null);
    }
  };

  const addressRes = useSelector((state) => state.address);

  useEffect(() => {
    if (!loadingAddress && addressRes?.record) {
      setAddress(addressRes.record);
    }
  }, [loadingAddress, addressRes]);

  const handlePayCash = async () => {
    if (selectOption === "0" || !address) {
      toast.error("اختر عنوان صحيحي أولاً");
      return;
    }

    if (!cartId) {
      toast.error("عربة التسوق فارغة");
      return;
    }

    const body = {
      shippingAddress: {
        details: address?.details || "",
        phone: address?.phone || "",
        city: address?.alias || "",
        postalCode: "41516",
      },
    };

    setLoadingOrder(true);
    await dispatch(AddOrder({ id: cartId, body }));
    setLoadingOrder(false);
  };

  const orderRes = useSelector((state) => state.order);

  useEffect(() => {
    if (!loadingOrder && orderRes) {
      if (orderRes?.status?.status === 201 || orderRes?.status === 201) {
        toast.success("تم طلب الطلب بنجاح");
        setTimeout(() => {
          navigte("/user/allorder");
        }, 1500);
      }
    }
  }, [loadingOrder, orderRes]);

  return [
    data,
    SaveOption,
    handlePayCash,
    selectOption,
    cartId,
    address,
    getAllAdress,
  ];
};

export default CheckOutHook;
