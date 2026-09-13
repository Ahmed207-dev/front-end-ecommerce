import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ordercard } from "../../ReduxTollKit/Slice/CheckOutSlice";
import CheckOutHook from "./CheckOutHook";

//
const CardCheckOutHook = () => {
  const [, , , , cartId, address] = CheckOutHook();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.order);
  const [loading, setLoading] = useState(true);
  const body = {
    shippingAddress: {
      details: address?.details,
      phone: address?.phone,
      city: address?.alias,
      postalCode: "41516",
    },
  };
  const handlePayCard = async () => {
    setLoading(true);
    await dispatch(Ordercard({ id: cartId, body }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (info?.status?.session) {
        window.open(info?.status?.session?.url);
      }
    }
  }, [loading, info]);

  return [handlePayCard];
};

export default CardCheckOutHook;
