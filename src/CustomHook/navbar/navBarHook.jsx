import { useState } from "react";

import { useEffect } from "react";
import SearchHomePageHook from "../proudct/SearchHomePageHook";
import { useNavigate } from "react-router-dom";

const navBarHook = () => {
  const [, , , , searchApi] = SearchHomePageHook();
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  const onChangeWord = (e) => {
    localStorage.setItem("SearchWord", e.target.value);
    setSearchWord(e.target.value);
    if (window.location.pathname === "/allprudcts") {
      return;
    } else {
      navigate("/allprudcts");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      searchApi();
    }, 400);
  }, [searchWord]);
  return [onChangeWord, searchWord];
};

export default navBarHook;
