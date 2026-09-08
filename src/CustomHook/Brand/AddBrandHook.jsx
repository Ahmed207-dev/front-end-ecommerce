import { useEffect, useState } from "react";
import uploadimpage from "../../Images/imagepload.png";
import { useDispatch, useSelector } from "react-redux";
import { AddBrand } from "../../ReduxTollKit/Slice/BrandSlice";
import { ToastContainer, toast } from "react-toastify";

const AddBrandHook = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImage] = useState(uploadimpage);
  const [name, setName] = useState("");
  const [ispress, setIspress] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.brand);

  const changephoto = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !selectedFile) {
      toast.error("من فضلك اختار");
      return;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", selectedFile);
    // بدايه
    setIspress(true);
    setLoading(true);
    await dispatch(AddBrand(formData));
    setLoading(false);
    // نهايه
  };

  useEffect(() => {
    if (loading === false && ispress === true) {
      if (status === 201) {
        toast.success("تم الاضافه بنجاح");
        setName("");
        setSelectedFile(null);
        setImage(uploadimpage);
      } else {
        toast.error("حدث خطا");
      }

      const timer = setTimeout(() => {
        setIspress(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return [img, changephoto, name, setName, ispress, loading, handleSubmit];
};

export default AddBrandHook;
