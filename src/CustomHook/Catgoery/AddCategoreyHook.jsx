import { useEffect, useState } from "react";
import uploadimpage from "../../Images/imagepload.png";
import { useDispatch, useSelector } from "react-redux";
import { AddCategorey } from "../../ReduxTollKit/Slice/CategorySlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddCategoreyHook = () => {
  const [img, setImage] = useState(uploadimpage);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.categorey);

  const changephoto = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !selectedFile) {
      toast.error("please set Name && image");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(AddCategorey(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false && isPress === true) {
      if (status) {
        if (status === 201) {
          toast.success("تم الاضافه بنجاح");
          setName("");
          setSelectedFile(null);
          setImage(uploadimpage);
        } else {
          toast.error("حدث خطا");
        }
      }

      const timer = setTimeout(() => {
        setIsPress(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    setLoading(false);
  }, [loading, status]);
  return [img, changephoto, setName, name, loading, isPress, handleSubmit];
};

export default AddCategoreyHook;
