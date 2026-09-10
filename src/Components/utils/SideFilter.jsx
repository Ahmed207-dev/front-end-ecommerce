import SideBarSearchHook from "../../CustomHook/search/SideBarSearchHook";

const SidebarFilter = () => {
  const [category, brand, clickCatgorey, clickBrand, priceFrom, priceTo] =
    SideBarSearchHook();
  return (
    <div className="mt-3">
      <div className="row">
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" />
            <div className="filter-sub me-2">الكل</div>
          </div>
          {category?.map((cat, i) => (
            <div key={i} className="d-flex mt-2">
              <input onClick={clickCatgorey} type="checkbox" value={cat._id} />
              <div className="filter-sub me-2">{cat.name}</div>
            </div>
          ))}

          <div className="filter-title mt-4">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-1">الكل</div>
          </div>
          {brand?.map((bran, i) => (
            <div key={i} className="d-flex mt-2">
              <input onClick={clickBrand} type="checkbox" value={bran._id} />
              <div className="filter-sub me-1">{bran.name}</div>
            </div>
          ))}

          {/* قسم السعر */}
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
              onChange={priceFrom}
              className="m-2 text-center"
              type="number"
              style={{ height: "25px", width: "50px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
              onChange={priceTo}
              className="m-2 text-center"
              type="number"
              style={{ height: "25px", width: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
