import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editCoupon,
  getSpecifCoupon,
} from "../../ReduxTollKit/Slice/CouponSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditCouponHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const specifData = useSelector((state) => state.coupon);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [percentage, setPercentage] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getSpecifCoupon(id));
      setLoadingData(false);
    };
    if (id) get();
  }, [dispatch, id]);

  useEffect(() => {
    if (loadingData === false) {
      if (specifData?.record) {
        setName(specifData?.record?.name);
        setDate(specifData?.record?.expire?.slice(0, 10));
        setPercentage(specifData?.record?.discount);
      }
    }
  }, [loadingData]);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changepercentage = (e) => {
    setPercentage(e.target.value);
  };

  const data = { name: name, expire: date, discount: percentage };

  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      editCoupon({
        id,
        data,
      }),
    );
    setTimeout(() => {
      navigate("/admin/addcopoun");
    }, 1500);
    setLoading(false);
  };
  const { status } = useSelector((state) => state.coupon);

  useEffect(() => {
    if (loading === false) {
      if (status?.status === 200) {
        toast.success("تمت التعديل بنجاح");
      } else {
        toast.error("حدث خطا ");
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
    specifData,
  ];
};

export default EditCouponHook;
