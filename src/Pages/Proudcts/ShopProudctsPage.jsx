import { Categoryheader } from "../../Components/catogery/Categoryheader";
import { ProudctsCopmonent } from "../../Components/Proudct/ProudctsCopmonent";
import PaginationPage from "../../Components/utils/PaginationPage";
import { SearchCount } from "../../Components/utils/SearchCount";
import SidebarFilter from "../../Components/utils/SideFilter";
import SearchHomePageHook from "../../CustomHook/proudct/SearchHomePageHook";
import SideBarSearchHook from "../../CustomHook/search/SideBarSearchHook";

export const ShopProudctsPage = () => {
  const [records, Pagination, pageCount, getpage, searchApi] =
    SearchHomePageHook();
  const [, , , , , , loading] = SideBarSearchHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <Categoryheader />
      <div className="container">
        <SearchCount
          searchApi={searchApi}
          title={`${Pagination.results || 0} منتجات`}
        />
        <div className="row d-flex flex-row">
          <div className="col-2 col-sm-2 col-md-1 d-flex">
            <SidebarFilter />
          </div>
          <div className="col-10 col-sm-10 col-md-11">
            <ProudctsCopmonent
              proudcts={records}
              loading={loading}
              title=""
              btntitle=""
              pathtext=""
            />
          </div>
        </div>
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      </div>
    </div>
  );
};
