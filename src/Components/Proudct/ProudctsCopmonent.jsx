import LoadingPage from "../../CustomHook/Loading/LoadingPage";
import ProudctComponentHook from "../../CustomHook/proudct/ProudctComponentHook";
import { Subtitle } from "../utils/Subtitle";
import { ProdctsCard } from "./ProdctsCard";

export const ProudctsCopmonent = ({
  title,
  btntitle,
  pathtext,
  proudcts,
  loading,
}) => {
  const [favProd] = ProudctComponentHook();

  return (
    <>
      <div className="container">
        <Subtitle title={title} btntitle={btntitle} pathtext={pathtext} />
        <div className="row d-flex my-2 justify-content-between">
          {loading ? (
            <LoadingPage />
          ) : proudcts?.length > 0 ? (
            proudcts.map((items) => (
              <ProdctsCard key={items._id} items={items} favProd={favProd} />
            ))
          ) : (
            <h4>لا توجد منتجات</h4> 
          )}
        </div>
      </div>
    </>
  );
};
