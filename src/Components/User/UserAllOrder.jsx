import AllOrderHook from "../../CustomHook/user/AllOrderHook";
import PaginationPage from "../utils/PaginationPage";
import { UserAllOrderItem } from "./UserAllOrderItem";

export const UserAllOrder = () => {
  const [result, allData, pagination, onpress] = AllOrderHook();

  return (
    <>
      <div>
        <div className="admin-content-text py-2">عدد الطلبات #{result}</div>
        <div className="justify-content-center">
          {allData?.length > 0 ? (
            allData?.map((items, index) => (
              <UserAllOrderItem key={index} items={items} num={index} />
            ))
          ) : (
            <h2>لا يوجد طلبات....</h2>
          )}
          {allData?.length > 0 ? (
            <PaginationPage
              pageCount={
                pagination?.numberOfPages ? pagination?.numberOfPages : 0
              }
              onpress={onpress}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
