import { useEffect, useState } from "react";
import AllAddressHook from "../user/AllAddressHook";
import { useDispatch, useSelector } from "react-redux";
import { getSpecifData } from "../../ReduxTollKit/Slice/AddressSlice";
import GetAllCartHook from "../cart/GetAllCartHook";
import { AddOrder } from "../../ReduxTollKit/Slice/CheckOutSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//
const CheckOutHook = () => {
  const dispatch = useDispatch();
  const [cartItems] = GetAllCartHook();
  const [loading, setloading] = useState(true);
  const [address, setAddress] = useState([]);
  const cartId = cartItems?._id || "";
  const [data] = AllAddressHook();
  const navigte = useNavigate();
  const SaveOption = async (e) => {
    if (e.target.value != "0") {
      getData(e.target.value);
    }
  };

  const getData = async (id) => {
    setloading(true);
    await dispatch(getSpecifData(id));
    setloading(false);
  };

  const addressRes = useSelector((state) => state.address);

  useEffect(() => {
    if (loading === false) {
      if (addressRes) {
        setAddress(addressRes?.record);
      }
    }
  }, [loading]);

  const orderRes = useSelector((state) => state.order);

  const body = {
    shippingAddress: {
      details: address?.details,
      phone: address?.phone,
      city: address?.alias,
      postalCode: "41516",
    },
  };

  const handlePayCash = async () => {
    if (cartId === "0") {
      toast.warn("اختر عنوان");
      return;
    }
    setloading(true);
    await dispatch(AddOrder({ id: cartId, body }));
    setloading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (orderRes) {
        if (orderRes?.status?.status === 201) {
          toast.success("تم طلب الطلب بنجاح");
          setTimeout(() => {
            navigte("/user/allorder");
          }, 1500);
        }
      }
    }
  }, [loading]);

  return [data, SaveOption, handlePayCash, cartId, address];
};

export default CheckOutHook;
