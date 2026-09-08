import { useParams } from "react-router-dom";
import { ProudctsCopmonent } from "../../Components/Proudct/ProudctsCopmonent";
import PaginationPage from "../../Components/utils/PaginationPage";
import ViewAllProudctHook from "../../CustomHook/proudct/ViewAllProudctHook";
export const ProudctsByCatgorey = () => {
  const { id } = useParams();
  const [allProudct, pageCount, getpage] = ViewAllProudctHook(id);

  return (
    <>
      <div style={{ minHeight: "670px" }}>
        <ProudctsCopmonent proudcts={allProudct?.records} />
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      </div>
    </>
  );
};
//
