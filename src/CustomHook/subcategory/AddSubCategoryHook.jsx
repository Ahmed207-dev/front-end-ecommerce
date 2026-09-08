import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import { toast } from "react-toastify";
import { AddSubCategorey } from "../../ReduxTollKit/Slice/SubCategorySlice";
const AddSubCategoryHook = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [isPress, setIsPress] = useState(true);
  const dispatch = useDispatch();

  const { records, loading } = useSelector((state) => state.categorey);
  const { status } = useSelector((state) => state.subcategory);

  useEffect(() => {
    if (!navigator.onLine) {
      toast.error("لا يوجد اتصال بالانترنت");
    }
    dispatch(CategoeryApi());
  }, [dispatch]);
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleSubmit = async (e) => {
    if (id === "0") {
      toast.warning("اختر تصنيف رئيسي");
      return;
    }
    if (name === "") {
      toast.warning("ادخل اسم تصنيف فرعي");
      return;
    }

    setIsPress(true);
    await dispatch(AddSubCategorey({ name, category: id }));
    setIsPress(false);
  };

  useEffect(() => {
    if (isPress === false) {
      setName("");
      setId("0");
    }
    if (status === 201) {
      toast.success("تمت الاضافه");
    }
  }, [isPress]);

  const notify = () => toast("Wow so easy!");
  return [name, setName, loading, records, handleChange, handleSubmit];
};

export default AddSubCategoryHook;
