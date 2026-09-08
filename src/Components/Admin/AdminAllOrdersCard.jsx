import { Link } from "react-router-dom";

export const AdminAllOrdersCard = ({ items, num }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 mb-3 bg-white">
      <Link
        to={`/admin/allorders/${items?._id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch gap-3">
          <div className="d-flex gap-3 align-items-center">
            <div className="fw-bold text-secondary">#{++num}</div>

            <div className="d-flex flex-column">
              <h6 className="fw-bold mb-1" style={{ fontSize: "15px" }}>
                طلب من العميل: {items?.user?.name || "عميل"}
              </h6>
              <h6 className="fw-bold mb-1" style={{ fontSize: "15px" }}>
                حساب العميل: {items?.user?.email || "عميل"}
              </h6>

              <small className="text-muted">
                عدد المنتجات: {items?.cartItems?.length || 1}
              </small>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-between align-items-start align-items-md-end gap-2">
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <span
                className={`badge ${items?.isDelivered ? "bg-success" : "bg-warning text-dark"}`}
              >
                التوصيل: {items?.isDelivered ? "تم التوصيل" : "قيد الانتظار"}
              </span>

              <span
                className={`badge ${items?.isPaid ? "bg-success" : "bg-warning text-dark"}`}
              >
                الدفع: {items?.isPaid ? "تم الدفع" : "قيد الانتظار"}
              </span>

              <span className="badge bg-light text-dark border">
                طريقة الدفع:
                {items?.paymentMethodType === "cash"
                  ? "كاش"
                  : "بطاقة إلكترونية"}
              </span>
            </div>

            <div className="fw-bold text-primary fs-5 mt-1">
              {items?.totalOrderPrice
                ? `${items.totalOrderPrice} جنيه`
                : "0 جنيه"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
