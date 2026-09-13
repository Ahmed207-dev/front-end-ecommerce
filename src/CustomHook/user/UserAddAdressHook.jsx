import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddAddress } from "../../ReduxTollKit/Slice/AddressSlice";
import { useNavigate } from "react-router-dom";
const UserAddAdressHook = () => {
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const [address, setAddress] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const changAddress = (e) => {
    setAddress(e.target.value);
  };
  const changefullAddress = (e) => {
    setFullAddress(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const { records } = useSelector((state) => state.address);
  const onSubmit = async () => {
    if (address === "" || fullAddress === "" || phone === "") {
      toast.error("من فضلك اكمل البيانات");
      return;
    }
    if (phone.length <= 10) {
      toast.error("اكتب رقم صحيح");
      return;
    }
    setLoading(true);
    await dispatch(
      AddAddress({
        alias: address,
        details: fullAddress,
        phone,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (records) {
        if (records?.status === "success") {
          toast.success("تمت الاضافه بنجاح");
        } else {
          toast.error("حدث خطا");
        }
      }
    }
  }, [loading]);

  return [
    address,
    fullAddress,
    phone,
    changAddress,
    changefullAddress,
    changePhone,
    onSubmit,
  ];
};

export default UserAddAdressHook;
