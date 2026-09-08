import ProudctComponentHook from "../../CustomHook/proudct/ProudctComponentHook";
import { Subtitle } from "../utils/Subtitle";
import { ProdctsCard } from "./ProdctsCard";

export const ProudctsCopmonent = ({ title, btntitle, pathtext, proudcts }) => {
  const [favProd] = ProudctComponentHook();

  return (
    <>
      <div className="container">
        <Subtitle title={title} btntitle={btntitle} pathtext={pathtext} />
        <div className="row d-flex my-2 justify-content-between">
          {proudcts && proudcts.length > 0 ? (
            proudcts?.map((items, index) => (
              <ProdctsCard key={items._id} items={items} favProd={favProd} />
            ))
          ) : (
            <div className="text-center">
              <h4> لا يوجد نتايج....</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
