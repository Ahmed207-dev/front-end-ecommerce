import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomePage } from "./Pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./Pages/Home/ErrorPage";
import { RootLayout } from "./Pages/Home/RootLayout";
import { LoginPage } from "./Components/Auth/LoginPage";
import { RegisterPage } from "./Components/Auth/RegisterPage";
import { AllCategory } from "./Pages/category/AllCategory";
import { AllBrand } from "./Pages/Brand/AllBrand";
import { ShopProudctsPage } from "./Pages/Proudcts/ShopProudctsPage";
import { ProudctDetailesPage } from "./Pages/Proudcts/ProudctDetailesPage";
import { CartPage } from "./Pages/Cart/CartPage";
import { ChoosePayPage } from "./Pages/CheckOut/ChoosePayPage";
import { AdminAllProudct } from "./Pages/Admin/AdminAllProudctPage";
import { AmidnAllOrders } from "./Pages/Admin/AdminAllOrdersPage";
import { AdminOrdersDetailsPage } from "./Pages/Admin/AdminOrdersDetailsPage";
import { AdminAllCategoryPage } from "./Pages/Admin/AdminAllCategoryPage";
import { AdminAddBrandPage } from "./Pages/Admin/AdminAddBrandPage";
import { AdminSubCategoryPage } from "./Pages/Admin/AdminSubCategoryPage";
import { AdminAddproudctsPage } from "./Pages/Admin/AdminAddProudctsPage";
import { UserAllOrderPage } from "./Pages/User/UserAllOrderPage";
import { UserProudctsFavourvitePage } from "./Pages/User/UserProudctsFavourvitePage";
import { UserAllAdressPage } from "./Pages/User/UserAllAdressPage";
import { UserAddAdreesPage } from "./Pages/User/UserAddAdreesPage";
import { UserEditAdressPage } from "./Pages/User/UserEditAdressPage";
import { UserProfilePage } from "./Pages/User/UserProfilePage";
import { AdminEditProudctPage } from "./Pages/Admin/AdminEditProudctPage";
import { Provider } from "react-redux";
import { store } from "./ReduxTollKit/Store";
import { ForgetPasswordPage } from "./Components/Auth/ForgetPasswordPage";
import { VerfiyCodePage } from "./Components/Auth/VerfiyCodePage";
import { ResetPasswordPage } from "./Components/Auth/ResetPasswordPage";
import { EditRate } from "./Components/Rate/EditRate";
import { AdminAddCopounPage } from "./Pages/Admin/AdminAddCopounPage";
import { AdminEditCoupon } from "./Components/Admin/AdminEditCoupon";
import { AdminEditCouponPage } from "./Pages/Admin/AdminEditCouponPage";
import ProtectedRoute from "./Components/utils/protectedroute";
import { ProudctsByCatgorey } from "./Pages/Proudcts/ProudctsByCatgorey";
import { ProudctsByBrand } from "./Pages/Proudcts/ProudctsByBrand";
import TermsPage from "./Pages/util/TermsPage";
import PrivacyPolicyPage from "./Pages/util/PrivacyPolicyPage";
import ContactPage from "./Pages/util/ContactPage";
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "allCategory",
        element: <AllCategory />,
      },
      {
        path: "allbrand",
        element: <AllBrand />,
      },
      {
        path: "allprudcts",
        element: <ShopProudctsPage />,
      },
      {
        path: "/allprudcts/:id",
        element: <ProudctDetailesPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "/user/forget-password",
        element: <ForgetPasswordPage />,
      },
      {
        path: "/user/verifyCode",
        element: <VerfiyCodePage />,
      },
      {
        path: "/user/restPassword",
        element: <ResetPasswordPage />,
      },
      {
        path: "/allCategory/:id",
        element: <ProudctsByCatgorey />,
      },
      {
        path: "/allbrand/:id",
        element: <ProudctsByBrand />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        element: <ProtectedRoute authwRole="user" />,
        children: [
          {
            path: "cart/pay",
            element: <ChoosePayPage />,
          },
          {
            path: "/user/allorder",
            element: <UserAllOrderPage />,
          },
          {
            path: "/user/favoriteproudct",
            element: <UserProudctsFavourvitePage />,
          },
          {
            path: "/user/adress",
            element: <UserAllAdressPage />,
          },
          {
            path: "/user/add-adress",
            element: <UserAddAdreesPage />,
          },
          {
            path: "/user/edit-adress/:id",
            element: <UserEditAdressPage />,
          },
          {
            path: "/user/profile",
            element: <UserProfilePage />,
          },
          {
            path: "/EditReview/:id",
            element: <EditRate />,
          },
        ],
      },
      {
        element: <ProtectedRoute authwRole="admin" />,
        children: [
          {
            path: "/admin/allproudct",
            element: <AdminAllProudct />,
          },
          {
            path: "/admin/allorders",
            element: <AmidnAllOrders />,
          },
          {
            path: "/admin/allorders/:id",
            element: <AdminOrdersDetailsPage />,
          },
          {
            path: "/admin/addbrand",
            element: <AdminAddBrandPage />,
          },
          {
            path: "/admin/category",
            element: <AdminAllCategoryPage />,
          },
          {
            path: "/admin/subcategory",
            element: <AdminSubCategoryPage />,
          },
          {
            path: "/admin/addproudcts",
            element: <AdminAddproudctsPage />,
          },
          {
            path: "/admin/edit/:id",
            element: <AdminEditProudctPage />,
          },
          {
            path: "/admin/addcopoun",
            element: <AdminAddCopounPage />,
          },
          {
            path: "/admin/editcoupon/:id",
            element: <AdminEditCouponPage />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
