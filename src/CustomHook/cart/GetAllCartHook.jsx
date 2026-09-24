import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart, stopLoading } from "../../ReduxTollKit/Slice/CartSlice";
const GetAllCartHook = () => {
  const dispatch = useDispatch();
  const { status, data, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const get = async () => {
      if (token) {
        await dispatch(getAllCart());
      } else {
        await dispatch(stopLoading());
      }
    };
    get();
  }, [dispatch]);

  return [data, status, loading];
};

export default GetAllCartHook;
