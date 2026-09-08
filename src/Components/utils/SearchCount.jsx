import React from "react";
import * as UnopDropdownPackage from "unop-react-dropdown";
import drop from "../../Images/drop.png";

const UnopDropdown = UnopDropdownPackage.default;
const CustomTrigger = ({ show, hide, ...props }) => <p {...props} />;
export const SearchCount = ({ title, searchApi }) => {
  const handler = () => {};
  const handleclick = (key) => {
    localStorage.setItem("sortType", key);
    searchApi();
  };
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <CustomTrigger className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={drop}
                alt=""
              />
              ترتيب حسب
            </CustomTrigger>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => {
                handleclick(" الاكثر مبيعا ");
              }}
              className="border-bottom card-filter-item"
            >
              الاكثر مبيعا
            </div>
            <div
              onClick={() => {
                handleclick("الاعلي تقييما");
              }}
              className="border-bottom card-filter-item"
            >
              الاعلي تقييما
            </div>
            <div
              onClick={() => {
                handleclick("السعر من الاقل للاعلي");
              }}
              className="border-bottom card-filter-item"
            >
              السعر من الاقل للاعلي
            </div>
            <div
              onClick={() => {
                handleclick("السعر من الاعلي للاقل");
              }}
              className="card-filter-item"
            >
              السعر من الاعلي للاقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCount;
