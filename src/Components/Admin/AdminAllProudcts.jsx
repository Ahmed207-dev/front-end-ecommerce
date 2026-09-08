import React, { useState } from "react";
import { AdminProudctsCard } from "./AdminProudctsCard";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const AdminAllProudcts = ({ proudcts }) => {
  return (
    <div>
      <div className="fw-bold fs-5 mb-3">ادارة جميع المنتجات</div>
      <div className="products-grid">
        {proudcts?.map((item, i) => (
          <AdminProudctsCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
