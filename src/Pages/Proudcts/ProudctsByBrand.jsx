import { useParams } from "react-router-dom";
import { ProudctsCopmonent } from "../../Components/Proudct/ProudctsCopmonent";
import PaginationPage from "../../Components/utils/PaginationPage";
import ViewAllProudctByBrandHook from "../../CustomHook/proudct/ViewAllProudctByBrandHook";
export const ProudctsByBrand = () => {
  const { id } = useParams();
  const [brands, pageCount, getpage] = ViewAllProudctByBrandHook(id);

  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <ProudctsCopmonent proudcts={brands?.brand} />
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      </div>
    </>
  );
};
