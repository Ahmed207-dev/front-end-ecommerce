import { BrandContainer } from "../../Components/brand/BrandContainer";
import PaginationPage from "../../Components/utils/PaginationPage";
import AllBrandHook from "../../CustomHook/Brand/AllBrandHook";

export const AllBrand = () => {
  const [pageCount, getpage, loading] = AllBrandHook();
  if (loading) {
    <h2>loading...</h2>;
  }
  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <BrandContainer />
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      </div>
    </>
  );
};
