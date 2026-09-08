import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileData } from "../../ReduxTollKit/Slice/UpdateUserSlice";
import { toast } from "react-toastify";
const UserProfileHook = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const res = useSelector((state) => state.profile);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(true);

  const changName = (e) => {
    setName(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    setLoading(true);
    await dispatch(editProfileData({ name: name, email: email, phone: phone }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res?.status === 200) {
          localStorage.setItem("user", JSON.stringify(res?.records?.data));
          toast.success("تم التعديل بنجاح");
          setTimeout(() => {
            setShow(false);
          }, 1500);
        } else {
          toast.error("حدث خطا");
        }
      }
    }
  }, [loading]);
  return [
    user,
    show,
    setShow,
    name,
    phone,
    email,
    changName,
    changePhone,
    changeEmail,
    onSubmit,
  ];
};

export default UserProfileHook;
