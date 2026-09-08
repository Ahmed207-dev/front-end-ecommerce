import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCoupon } from "../../ReduxTollKit/Slice/CouponSlice";
import { toast } from "react-toastify";

const AddCouponHook = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [percentage, setPercentage] = useState("");
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const couponAdd = useSelector((state) => state.coupon);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changepercentage = (e) => {
    setPercentage(e.target.value);
  };
  const onSubmit = async () => {
    if (name === "" || date === "" || percentage === "") {
      toast.warning("من فضلك اكمل البيانات");
      return;
    }
    setLoading(true);
    await dispatch(
      AddCoupon({
        name: name,
        expire: date,
        discount: percentage,
      }),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading == false) {
      if (couponAdd?.status?.status === 201) {
        toast.success("تمت اضافه الكوبون");
        setTimeout(() => {
          setName("");
          setDate("");
          setPercentage("");
        }, 1000);
      } else if (couponAdd?.status?.status === "fail") {
        toast.error("مكرر");
      }
    }
  }, [loading]);
  return [
    name,
    date,
    percentage,
    changeName,
    changeDate,
    changepercentage,
    onSubmit,
  ];
};

export default AddCouponHook;
