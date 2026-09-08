import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdress } from "../../ReduxTollKit/Slice/AddressSlice";
import { deleteAddress } from "../../ReduxTollKit/Slice/AddressSlice";
import { toast } from "react-toastify";

const AllAddressHook = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.address);
  useEffect(() => {
    dispatch(getAllAdress());
  }, [dispatch]);

  // deleteAddress
  const onClickDelete = async (id) => {
    const isConfirm = window.confirm("هل انت متاكد");
    if (isConfirm) {
      await dispatch(deleteAddress(id));
      toast.success("تم الحذف");
    }
  };
  return [data, onClickDelete];
};

export default AllAddressHook;
