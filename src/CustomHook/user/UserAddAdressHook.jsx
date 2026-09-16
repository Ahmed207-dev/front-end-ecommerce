import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddAddress } from "../../ReduxTollKit/Slice/AddressSlice";
import { useNavigate } from "react-router-dom";

const UserAddAdressHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

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
    setIsPress(true);
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
    if (loading === false && isPress === true) {
      if (records) {
        if (records?.status === "success") {
          toast.success("تمت الاضافه بنجاح");
          if (window.location.pathname === "/user/add-adress") {
            setTimeout(() => {
              navigate("/user/adress");
            }, 1000);
          }
        } else {
          toast.error("حدث خطا");
        }
      }
      setIsPress(false);
    }
  }, [loading, isPress, records]);

  return [
    address,
    fullAddress,
    phone,
    changAddress,
    changefullAddress,
    changePhone,
    onSubmit,
    isPress,
  ];
};

export default UserAddAdressHook;
