import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchAllProudct } from "../../ReduxTollKit/Slice/ProudctSlice";
const SearchHomePageHook = () => {
  let limit = 4;
  const dispatch = useDispatch();
  const { records, Pagination } = useSelector((state) => state.proudct);

  let word = "";
  let queryCat = "";
  let queryBrand = "";
  let priceFrom = "";
  let priceTo = "";
  let pricefromString = "";
  let priceToString = "";

  const searchApi = async () => {
    storage();
    sortData();
    await dispatch(
      searchAllProudct(
        `limit=${limit}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`,
      ),
    );
  };
  const storage = () => {
    if (localStorage.getItem("SearchWord") !== null) {
      word = localStorage.getItem("SearchWord");
    } else {
      word = "";
    }
    if (localStorage.getItem("catChecked") !== null) {
      queryCat = localStorage.getItem("catChecked");
    } else {
      queryCat = "";
    }
    if (localStorage.getItem("BrandChecked") !== null) {
      queryBrand = localStorage.getItem("BrandChecked");
    } else {
      queryBrand = "";
    }
    if (localStorage.getItem("fromPrice") !== null) {
      priceFrom = localStorage.getItem("fromPrice");
    } else {
      priceFrom = "";
    }
    if (localStorage.getItem("ToPrice") !== null) {
      priceTo = localStorage.getItem("ToPrice");
    } else {
      priceTo = "";
    }
    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = ` &price[gt]=${priceFrom}`;
    }
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = ` &price[lte]=${priceTo}`;
    }
  };

  const pageCount = Pagination?.paginationResult?.numberOfPages || 0;

  const getpage = async (page) => {
    storage();
    sortData();
    await dispatch(
      searchAllProudct(
        `limit=${limit}&page=${page}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}${pricefromString}${priceToString}`,
      ),
    );
  };

  let sortType = "";
  let sort = "";
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-ratingsAverage";
    } else if (sortType === "الاقل تقييما") {
      sort = "+ratingsAverage";
    }
  };

  return [records, Pagination, pageCount, getpage, searchApi];
};

export default SearchHomePageHook;
