import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import { FetchBrand } from "../../ReduxTollKit/Slice/BrandSlice";
import { getOneSubCategory } from "../../ReduxTollKit/Slice/SubCategorySlice";
import {
  AddProudct,
  EditProudct,
  getSpecifproudct,
} from "../../ReduxTollKit/Slice/ProudctSlice";
import { toast } from "react-toastify";

const EditProudctHook = (id) => {
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
  const [prodDiscount, setProdDiscount] = useState(0);
  const [prodPrice, setProdPrice] = useState(0);
  const [Qty, setQty] = useState(0);
  const [CatId, setCatId] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [SubCatId, setSubCatId] = useState([]);
  const [selectedSubId, setSelectedSubId] = useState([]);
  // show && hide  color
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  //delete color
  //
  const [loading, setLoading] = useState(true);
  //
  const removeColor = (indexReomve) => {
    setColors((prev) => prev.filter((_, index) => index !== indexReomve));
  };
  //
  const dispatch = useDispatch();
  // All category
  const { records } = useSelector((state) => state.categorey);
  // All brand
  const brand = useSelector((state) => state.brand);
  // All SubCategory
  const SubCategory = useSelector((state) => state.subcategory);
  // Edit Proudct
  const { record, status } = useSelector((state) => state.proudct);
  //
  useEffect(() => {
    if (record) {
      setProdName(record?.title);
      setProdDes(record?.description);
      setProdDiscount(record?.price);
      setQty(record?.quantity);
      setBrandID(record?.brand);
      setCatId(record?.category);
      setColors(record?.availableColors);
      if (record?.images?.length > 0) {
        setFiles(record?.images);
      } else {
        setFiles([]);
      }
    }
  }, [record]);
  //
  //fire All items
  useEffect(() => {
    dispatch(CategoeryApi());
    dispatch(FetchBrand());
    dispatch(getSpecifproudct(id));
  }, [dispatch]);
  //
  // 1
  const handleCategory = (e) => {
    setCatId(e.target.value);
  };
  //2
  useEffect(() => {
    if (CatId && CatId !== "0" && CatId !== 0) {
      const run = async () => {
        await dispatch(getOneSubCategory(CatId));
      };
      run();
    }
  }, [CatId]);
  //3
  useEffect(() => {
    if (SubCategory?.records) setOptions(SubCategory?.records);
  }, [SubCategory]);
  //
  const notify = () => toast("Wow so easy!");
  //
  const handleChangeComplete = (e) => {
    const color = e.hex;
    setColors([...colors, color]);
    setShowColor(false);
  };
  // """"""""""""""""""""""""""""""""""""""""
  const urlToFile = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = url.split("/").pop() || "image.jpg";
      return new File([blob], filename, { type: blob.type || "image/jpeg" });
    } catch (error) {
      console.error("Error converting URL to File:", error);
      return null;
    }
  };
  //""""""""""""""""""""""""""""""""""""""""
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      prodName === "" ||
      prodDes === "" ||
      prodDiscount === "" ||
      CatId === "" ||
      Qty === ""
    ) {
      toast.warning("من فضلك أكمل الصفحه");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDes);
    formData.append("price", prodDiscount);
    formData.append("category", CatId);
    formData.append("quantity", Qty);
    formData.append("brand", BrandID);
    //""""""""""""""""""""""""""""""""""""""
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let currentFile = files[i];
        if (typeof currentFile === "string") {
          currentFile = await urlToFile(currentFile);
        }
        if (currentFile) {
          if (i === 0) {
            formData.append("imageCover", currentFile);
          }
          formData.append("images", currentFile);
        }
      }
    }
    //""""""""""""""""""""""""""""""""""""""
    colors.forEach((color) => formData.append("availableColors", color));
    selectedSubId.forEach((item) =>
      formData.append("subcategory", item._id || item),
    );
    await dispatch(EditProudct({ formData, id }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (status === 200) {
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
      } else {
        toast.error("حدث مشكله حاول مره اخري");
      }
    }
  }, [loading]);
  return [
    removeFile,
    BrandID,
    CatId,
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
    records,
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
  ];
};

export default EditProudctHook;
