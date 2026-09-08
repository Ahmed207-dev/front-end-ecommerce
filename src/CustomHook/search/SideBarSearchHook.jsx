import { useEffect, useState, useRef } from "react";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { FetchBrand } from "../../ReduxTollKit/Slice/BrandSlice";
import SearchHomePageHook from "../proudct/SearchHomePageHook";

const SideBarSearchHook = () => {
  const [, , , , searchApi] = SearchHomePageHook();
  const dispatch = useDispatch();

  const category = useSelector((state) => state.categorey);
  const brand = useSelector((state) => state.brand);

  const getAllData = async () => {
    await dispatch(CategoeryApi());
    await dispatch(FetchBrand());
  };

  useEffect(() => {
    getAllData();
  }, [dispatch]);

  const [catChecked, setCatChecked] = useState([]);
  const clickCatgorey = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else {
        setCatChecked(catChecked.filter((item) => item !== value));
      }
    }
  };

  // Brand
  const [catBrand, setBrand] = useState([]);
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrand([]);
    } else {
      if (e.target.checked === true) {
        setBrand([...catBrand, value]);
      } else {
        setBrand(catBrand.filter((item) => item !== value));
      }
    }
  };
  // Pricing
  const [from, setFromPrice] = useState(0);
  const [to, setToPrice] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("fromPrice", e.target.value);
    setFromPrice(e.target.value);
  };

  const priceTo = (e) => {
    localStorage.setItem("ToPrice", e.target.value);
    setToPrice(e.target.value);
  };

  useEffect(() => {
    let queryBrand = catBrand.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("BrandChecked", queryBrand);
    let queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    const timer = setTimeout(() => {
      searchApi();
    }, 500);
    return () => clearTimeout(timer);
  }, [catBrand, catChecked, from, to]);

  return [
    category.records,
    brand.records,
    clickCatgorey,
    clickBrand,
    priceFrom,
    priceTo,
  ];
};

export default SideBarSearchHook;
