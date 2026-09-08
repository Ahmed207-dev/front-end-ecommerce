import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editAddress,
  getSpecifData,
} from "../../ReduxTollKit/Slice/AddressSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const specifData = useSelector((state) => state.address);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      dispatch(getSpecifData(id));
      setLoading(false);
    };
    if (id) get();
  }, [dispatch, id]);
  useEffect(() => {
    if (loading === false) {
      if (specifData) {
        setAddress(specifData?.record?.alias || "");
        setFullAddress(specifData?.record?.details || "");
        setPhone(specifData?.record?.phone || "");
      }
    }
  }, [loading, specifData]);
  let data = { alias: address, details: fullAddress, phone };
  const onSubmit = async () => {
    const res = await dispatch(editAddress({ id, data }));
    if (res?.payload?.status === 200) {
      toast.success("تم التعديل بنجاح");
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }
  };
  return [
    specifData,
    address,
    fullAddress,
    phone,
    changAddress,
    changefullAddress,
    changePhone,
    onSubmit,
  ];
};

export default EditAddressHook;
