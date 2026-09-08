import { Slider } from "../../Components/Home/Slider";
import { Subtitle } from "../../Components/utils/Subtitle";
import { HomeCatogery } from "../../Components/Home/HomeCategory";
import { ProudctsCopmonent } from "../../Components/Proudct/ProudctsCopmonent";
import Discount from "../../Components/Home/Discount";
import { BrandCopmonent } from "../../Components/brand/BrandCopmonent";
import ViewHomePageHook from "../../CustomHook/proudct/ViewHomePageHook";
import { ToastContainer } from "react-toastify";

export const HomePage = () => {
  const [items, status] = ViewHomePageHook();
  return (
    <>
      <Slider />
      <HomeCatogery />
      <ProudctsCopmonent
        proudcts={items}
        status={status}
        title="اكثر مبيعا"
        btntitle="المزيد"
        pathtext="allprudcts"
      />
      <Discount />
      <ProudctsCopmonent
        proudcts={items}
        status={status}
        title=" احدث مشتريات"
        btntitle="المزيد"
        pathtext="allprudcts"
      />
      <BrandCopmonent title="اشهر المركات" btntitle="المزيد" />
      <ToastContainer />
    </>
  );
};
