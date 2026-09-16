import React from "react";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import { AdminOrdersDetails } from "../../Components/Admin/AdminOrdersDetails";

export const AdminOrdersDetailsPage = () => {
  return (
    <>
      <div
        className="container d-flex py-2 flex-wrap"
        style={{ minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminOrdersDetails />
        </div>
      </div>
    </>
  );
};
