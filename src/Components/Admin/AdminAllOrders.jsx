import AllOrderHook from "../../CustomHook/user/AllOrderHook";
import PaginationPage from "../utils/PaginationPage";
import { AdminAllOrdersCard } from "./AdminAllOrdersCard";

export const AdminAllOrders = () => {
  const [result, allData, pagination, onpress] = AllOrderHook();
  return (
    <>
      <div>
        {allData?.map((items, index) => (
          <AdminAllOrdersCard key={index} items={items} num={index} />
        ))}
        <PaginationPage
          pageCount={pagination?.numberOfPages ? pagination?.numberOfPages : 0}
          onpress={onpress}
        />
      </div>
    </>
  );
};
