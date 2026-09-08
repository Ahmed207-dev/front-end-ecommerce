import { Categoryheader } from "../../Components/catogery/Categoryheader";
import { ProudctDetailes } from "../../Components/Proudct/ProudctDetailes";
import { ProudctsCopmonent } from "../../Components/Proudct/ProudctsCopmonent";
import { RateContainer } from "../../Components/Rate/RateContainer";
import ViewHomePageHook from "../../CustomHook/proudct/ViewHomePageHook";

export const ProudctDetailesPage = () => {
  const [items] = ViewHomePageHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <Categoryheader />
      <ProudctDetailes />
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <RateContainer />
        <div className="admin-content-text my-2">اشهر التصنيفات</div>
        <ProudctsCopmonent proudcts={items} />
      </div>
    </div>
  );
};
