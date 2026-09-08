import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import { FetchBrand } from "../../ReduxTollKit/Slice/BrandSlice";
import { getOneSubCategory } from "../../ReduxTollKit/Slice/SubCategorySlice";
import { AddProudct } from "../../ReduxTollKit/Slice/ProudctSlice";
import { toast } from "react-toastify";

const AddProudctHook = () => {
  const [options, setOptions] = useState([]);
  const onSelect = (selectedFiles) => {
    setSelectedSubId(selectedFiles);
  };
  const onRemove = (selectedFiles) => {
    setSelectedSubId(selectedFiles);
  };
  // image dropzone
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      setFiles((prev) => [...prev, ...newFiles]);
    },
  });
  const removeFile = (indexRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexRemove));
  };
  // states
  const [prodName, setProdName] = useState("");
  const [prodDes, setProdDes] = useState("");
  const [prodDiscount, setProdDiscount] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [Qty, setQty] = useState("");
  const [CatId, setCatId] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [selectedSubId, setSelectedSubId] = useState([]);
  // show && hide  color
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  //delete color
  //
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  //

  const removeColor = (indexReomve) => {
    setColors((prev) => prev.filter((_, index) => index !== indexReomve));
  };
  //
  const dispatch = useDispatch();
  // All category
  const categorey = useSelector((state) => state.categorey);
  // All brand
  const brand = useSelector((state) => state.brand);
  // All SubCategory
  const SubCategory = useSelector((state) => state.subcategory);
  const { status } = useSelector((state) => state.proudct);
  //fire All items
  useEffect(() => {
    dispatch(CategoeryApi());
    dispatch(FetchBrand());
  }, [dispatch]);
  //
  useEffect(() => {
    if (CatId !== 0) {
      setOptions(SubCategory.records);
    }
  }, [CatId]);
  //
  const notify = () => toast("Wow so easy!");

  //

  const handleChangeComplete = (e) => {
    const color = e.hex;
    setColors([...colors, color]);
    setShowColor(false);
  };
  const handleCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOneSubCategory(e.target.value));
    }
    setCatId(e.target.value);
  };
  // save Adds
  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    if (
      prodName === "" ||
      prodDes === "" ||
      prodDiscount === "" ||
      CatId === "" ||
      Qty === "" ||
      files.length <= 0 ||
      prodPrice === ""
    ) {
      toast.warning("من فضلك اكمل الصفحه");
      return;
    } else {
      const formData = new FormData();
      formData.append("title", prodName);
      formData.append("description", prodDes);
      formData.append("price", prodDiscount);
      formData.append("priceAfterDiscount", prodPrice);
      formData.append("category", CatId);
      formData.append("quantity", Qty);
      formData.append("imageCover", files[0]);
      formData.append("brand", BrandID);

      // images
      files?.map((file) => {
        formData.append("images", file);
      });
      // !availableColors
      colors.map((color) => formData.append("availableColors", color));
      // !subcategory
      selectedSubId.map((item) => formData.append("subcategory", item._id));
      setLoading(true);
      setIsPress(true);
      await dispatch(AddProudct(formData));
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading === false) {
      if (status === 201) {
        toast.success("تمت الاضافه");
        setProdName("");
        setProdDes("");
        setProdDiscount("");
        setQty("");
        setCatId("");
        setBrandID("");
        setSelectedSubId([]);
        setFiles([]);
        setColors([]);
        setProdPrice("");
        setIsPress(false);
      } else {
        toast.error("حدث مشكله حاول مره اخري");
      }
    }
  }, [loading]);
  return [
    removeFile,
    getRootProps,
    isDragActive,
    getInputProps,
    files,
    prodName,
    setProdName,
    prodDes,
    setProdDes,
    Qty,
    setQty,
    prodDiscount,
    setProdDiscount,
    prodPrice,
    setProdPrice,
    categorey?.records,
    handleCategory,
    options,
    onSelect,
    onRemove,
    setBrandID,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    isPress,
  ];
};

export default AddProudctHook;
