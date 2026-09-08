import { UserAllOrderCard } from "./UserAllOrderCard";

export const UserAllOrderItem = ({ items, num }) => {
  return (
    <>
      <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
        <div className="order-title">الطلب رقم #{++num}</div>
        <div className="order-title">
          تاريح الطلب # {items?.updatedAt?.slice(0, 10)}
        </div>

        {items?.cartItems?.map((item, index) => (
          <UserAllOrderCard key={index} item={item} />
        ))}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <p style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              الحاله التوصيل:
              <span className="stat" style={{ color: "gray" }}>
                {items?.isDelivered === false ? "قيد انتظار" : "تم التوصيلf"}
              </span>
            </p>
            <p style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              الحاله الدفع:
              <span className="stat" style={{ color: "gray" }}>
                {items?.isPaid === false ? "قيد انتظار" : "تم الدفع"}
              </span>
            </p>
            <p style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              طريقه الدفع:
              <span className="stat" style={{ color: "gray" }}>
                {items?.paymentMethodType === "cash"
                  ? "كاش"
                  : "بطاقه الكترونيه"}
              </span>
            </p>
          </div>
          <div>
            <span>{items?.totalOrderPrice} جنيه</span>
          </div>
        </div>
      </div>
    </>
  );
};
