const StrictMode = __vite__cjsImport2_react["StrictMode"];const createRoot = __vite__cjsImport3_reactDom_client["createRoot"];const _jsxDEV = __vite__cjsImport46_react_jsxDevRuntime["jsxDEV"];import "/node_modules/.vite/deps/bootstrap_dist_js_bootstrap__bundle__min__js.js?v=20898a48";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=20898a48";
import __vite__cjsImport3_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=20898a48";
import "/src/index.css?t=1789314510114";
import { HomePage } from "/src/Pages/Home/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=20898a48";
import { ErrorPage } from "/src/Pages/Home/ErrorPage.jsx";
import { RootLayout } from "/src/Pages/Home/RootLayout.jsx?t=1789313948249";
import { LoginPage } from "/src/Components/Auth/LoginPage.jsx?t=1789315736263";
import { RegisterPage } from "/src/Components/Auth/RegisterPage.jsx";
import { AllCategory } from "/src/Pages/category/AllCategory.jsx";
import { AllBrand } from "/src/Pages/Brand/AllBrand.jsx";
import { ShopProudctsPage } from "/src/Pages/Proudcts/ShopProudctsPage.jsx";
import { ProudctDetailesPage } from "/src/Pages/Proudcts/ProudctDetailesPage.jsx";
import { CartPage } from "/src/Pages/Cart/CartPage.jsx";
import { ChoosePayPage } from "/src/Pages/CheckOut/ChoosePayPage.jsx?t=1789308464978";
import { AdminAllProudct } from "/src/Pages/Admin/AdminAllProudctPage.jsx";
import { AmidnAllOrders } from "/src/Pages/Admin/AdminAllOrdersPage.jsx";
import { AdminOrdersDetailsPage } from "/src/Pages/Admin/AdminOrdersDetailsPage.jsx";
import { AdminAllCategoryPage } from "/src/Pages/Admin/AdminAllCategoryPage.jsx";
import { AdminAddBrandPage } from "/src/Pages/Admin/AdminAddBrandPage.jsx";
import { AdminSubCategoryPage } from "/src/Pages/Admin/AdminSubCategoryPage.jsx";
import { AdminAddproudctsPage } from "/src/Pages/Admin/AdminAddProudctsPage.jsx";
import { UserAllOrderPage } from "/src/Pages/User/UserAllOrderPage.jsx";
import { UserProudctsFavourvitePage } from "/src/Pages/User/UserProudctsFavourvitePage.jsx";
import { UserAllAdressPage } from "/src/Pages/User/UserAllAdressPage.jsx?t=1789304878914";
import { UserAddAdreesPage } from "/src/Pages/User/UserAddAdreesPage.jsx?t=1789304078764";
import { UserEditAdressPage } from "/src/Pages/User/UserEditAdressPage.jsx";
import { UserProfilePage } from "/src/Pages/User/UserProfilePage.jsx?t=1789303171981";
import { AdminEditProudctPage } from "/src/Pages/Admin/AdminEditProudctPage.jsx";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=20898a48";
import { store } from "/src/ReduxTollKit/Store.jsx";
import { ForgetPasswordPage } from "/src/Components/Auth/ForgetPasswordPage.jsx";
import { VerfiyCodePage } from "/src/Components/Auth/VerfiyCodePage.jsx";
import { ResetPasswordPage } from "/src/Components/Auth/ResetPasswordPage.jsx";
import { EditRate } from "/src/Components/Rate/EditRate.jsx";
import { AdminAddCopounPage } from "/src/Pages/Admin/AdminAddCopounPage.jsx";
import { AdminEditCoupon } from "/src/Components/Admin/AdminEditCoupon.jsx";
import { AdminEditCouponPage } from "/src/Pages/Admin/AdminEditCouponPage.jsx";
import ProtectedRoute from "/src/Components/utils/protectedroute.jsx";
import { ProudctsByCatgorey } from "/src/Pages/Proudcts/ProudctsByCatgorey.jsx";
import { ProudctsByBrand } from "/src/Pages/Proudcts/ProudctsByBrand.jsx";
import TermsPage from "/src/Pages/util/TermsPage.jsx";
import PrivacyPolicyPage from "/src/Pages/util/PrivacyPolicyPage.jsx";
import ContactPage from "/src/Pages/util/ContactPage.jsx";
var _jsxFileName = "C:/Users/HP/OneDrive/Desktop/Web/react tutroial/E-commerce/app-project/src/main.jsx";
import __vite__cjsImport46_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=20898a48";
//
const router = createBrowserRouter([{
	path: "/",
	element: /* @__PURE__ */ _jsxDEV(RootLayout, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 14
	}, this),
	errorElement: /* @__PURE__ */ _jsxDEV(ErrorPage, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 19
	}, this),
	children: [
		{
			index: true,
			element: /* @__PURE__ */ _jsxDEV(HomePage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 18
			}, this)
		},
		{
			path: "login",
			element: /* @__PURE__ */ _jsxDEV(LoginPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 18
			}, this)
		},
		{
			path: "register",
			element: /* @__PURE__ */ _jsxDEV(RegisterPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 18
			}, this)
		},
		{
			path: "allCategory",
			element: /* @__PURE__ */ _jsxDEV(AllCategory, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 18
			}, this)
		},
		{
			path: "allbrand",
			element: /* @__PURE__ */ _jsxDEV(AllBrand, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 18
			}, this)
		},
		{
			path: "allprudcts",
			element: /* @__PURE__ */ _jsxDEV(ShopProudctsPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 18
			}, this)
		},
		{
			path: "/allprudcts/:id",
			element: /* @__PURE__ */ _jsxDEV(ProudctDetailesPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 18
			}, this)
		},
		{
			path: "cart",
			element: /* @__PURE__ */ _jsxDEV(CartPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 18
			}, this)
		},
		{
			path: "/user/forget-password",
			element: /* @__PURE__ */ _jsxDEV(ForgetPasswordPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 18
			}, this)
		},
		{
			path: "/user/verifyCode",
			element: /* @__PURE__ */ _jsxDEV(VerfiyCodePage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 18
			}, this)
		},
		{
			path: "/user/restPassword",
			element: /* @__PURE__ */ _jsxDEV(ResetPasswordPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 96,
				columnNumber: 18
			}, this)
		},
		{
			path: "/allCategory/:id",
			element: /* @__PURE__ */ _jsxDEV(ProudctsByCatgorey, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 18
			}, this)
		},
		{
			path: "/allbrand/:id",
			element: /* @__PURE__ */ _jsxDEV(ProudctsByBrand, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 18
			}, this)
		},
		{
			path: "/terms",
			element: /* @__PURE__ */ _jsxDEV(TermsPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 18
			}, this)
		},
		{
			path: "/privacy-policy",
			element: /* @__PURE__ */ _jsxDEV(PrivacyPolicyPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 18
			}, this)
		},
		{
			path: "/contact",
			element: /* @__PURE__ */ _jsxDEV(ContactPage, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 18
			}, this)
		},
		{
			element: /* @__PURE__ */ _jsxDEV(ProtectedRoute, { authwRole: "user" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 18
			}, this),
			children: [
				{
					path: "cart/pay",
					element: /* @__PURE__ */ _jsxDEV(ChoosePayPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/allorder",
					element: /* @__PURE__ */ _jsxDEV(UserAllOrderPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/favoriteproudct",
					element: /* @__PURE__ */ _jsxDEV(UserProudctsFavourvitePage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/adress",
					element: /* @__PURE__ */ _jsxDEV(UserAllAdressPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 136,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/add-adress",
					element: /* @__PURE__ */ _jsxDEV(UserAddAdreesPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/edit-adress/:id",
					element: /* @__PURE__ */ _jsxDEV(UserEditAdressPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 22
					}, this)
				},
				{
					path: "/user/profile",
					element: /* @__PURE__ */ _jsxDEV(UserProfilePage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 22
					}, this)
				},
				{
					path: "/EditReview/:id",
					element: /* @__PURE__ */ _jsxDEV(EditRate, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 22
					}, this)
				}
			]
		},
		{
			element: /* @__PURE__ */ _jsxDEV(ProtectedRoute, { authwRole: "admin" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 18
			}, this),
			children: [
				{
					path: "/admin/allproudct",
					element: /* @__PURE__ */ _jsxDEV(AdminAllProudct, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/allorders",
					element: /* @__PURE__ */ _jsxDEV(AmidnAllOrders, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/allorders/:id",
					element: /* @__PURE__ */ _jsxDEV(AdminOrdersDetailsPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/addbrand",
					element: /* @__PURE__ */ _jsxDEV(AdminAddBrandPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/category",
					element: /* @__PURE__ */ _jsxDEV(AdminAllCategoryPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/subcategory",
					element: /* @__PURE__ */ _jsxDEV(AdminSubCategoryPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 181,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/addproudcts",
					element: /* @__PURE__ */ _jsxDEV(AdminAddproudctsPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/edit/:id",
					element: /* @__PURE__ */ _jsxDEV(AdminEditProudctPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/addcopoun",
					element: /* @__PURE__ */ _jsxDEV(AdminAddCopounPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 22
					}, this)
				},
				{
					path: "/admin/editcoupon/:id",
					element: /* @__PURE__ */ _jsxDEV(AdminEditCouponPage, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 22
					}, this)
				}
			]
		}
	]
}]);
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(Provider, {
	store,
	children: /* @__PURE__ */ _jsxDEV(RouterProvider, { router }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 206,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 205,
	columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,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Q04sU0FBUyx3QkFBQyxzQkFBRCxDQUF1Qjs7Ozs7SUFDbEM7SUFDQTtLQUNFLE1BQU07S0FDTixTQUFTLHdCQUFDLG9CQUFELENBQXFCOzs7OztJQUNoQztJQUNBO0tBQ0UsTUFBTTtLQUNOLFNBQVMsd0JBQUMscUJBQUQsQ0FBc0I7Ozs7O0lBQ2pDO0dBQ0Y7RUFDRjtDQUNGO0FBQ0YsQ0FDRixDQUFDO0FBQ0QsV0FBVyxTQUFTLGVBQWUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUMxQyx3QkFBQyxVQUFEO0NBQWlCO1dBQ2Ysd0JBQUMsZ0JBQUQsRUFBd0IsT0FBUzs7Ozs7QUFDekI7Ozs7UUFDWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL1BhZ2VzL0hvbWUvSG9tZVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEVycm9yUGFnZSB9IGZyb20gXCIuL1BhZ2VzL0hvbWUvRXJyb3JQYWdlXCI7XG5pbXBvcnQgeyBSb290TGF5b3V0IH0gZnJvbSBcIi4vUGFnZXMvSG9tZS9Sb290TGF5b3V0XCI7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tIFwiLi9Db21wb25lbnRzL0F1dGgvTG9naW5QYWdlXCI7XG5pbXBvcnQgeyBSZWdpc3RlclBhZ2UgfSBmcm9tIFwiLi9Db21wb25lbnRzL0F1dGgvUmVnaXN0ZXJQYWdlXCI7XG5pbXBvcnQgeyBBbGxDYXRlZ29yeSB9IGZyb20gXCIuL1BhZ2VzL2NhdGVnb3J5L0FsbENhdGVnb3J5XCI7XG5pbXBvcnQgeyBBbGxCcmFuZCB9IGZyb20gXCIuL1BhZ2VzL0JyYW5kL0FsbEJyYW5kXCI7XG5pbXBvcnQgeyBTaG9wUHJvdWRjdHNQYWdlIH0gZnJvbSBcIi4vUGFnZXMvUHJvdWRjdHMvU2hvcFByb3VkY3RzUGFnZVwiO1xuaW1wb3J0IHsgUHJvdWRjdERldGFpbGVzUGFnZSB9IGZyb20gXCIuL1BhZ2VzL1Byb3VkY3RzL1Byb3VkY3REZXRhaWxlc1BhZ2VcIjtcbmltcG9ydCB7IENhcnRQYWdlIH0gZnJvbSBcIi4vUGFnZXMvQ2FydC9DYXJ0UGFnZVwiO1xuaW1wb3J0IHsgQ2hvb3NlUGF5UGFnZSB9IGZyb20gXCIuL1BhZ2VzL0NoZWNrT3V0L0Nob29zZVBheVBhZ2VcIjtcbmltcG9ydCB7IEFkbWluQWxsUHJvdWRjdCB9IGZyb20gXCIuL1BhZ2VzL0FkbWluL0FkbWluQWxsUHJvdWRjdFBhZ2VcIjtcbmltcG9ydCB7IEFtaWRuQWxsT3JkZXJzIH0gZnJvbSBcIi4vUGFnZXMvQWRtaW4vQWRtaW5BbGxPcmRlcnNQYWdlXCI7XG5pbXBvcnQgeyBBZG1pbk9yZGVyc0RldGFpbHNQYWdlIH0gZnJvbSBcIi4vUGFnZXMvQWRtaW4vQWRtaW5PcmRlcnNEZXRhaWxzUGFnZVwiO1xuaW1wb3J0IHsgQWRtaW5BbGxDYXRlZ29yeVBhZ2UgfSBmcm9tIFwiLi9QYWdlcy9BZG1pbi9BZG1pbkFsbENhdGVnb3J5UGFnZVwiO1xuaW1wb3J0IHsgQWRtaW5BZGRCcmFuZFBhZ2UgfSBmcm9tIFwiLi9QYWdlcy9BZG1pbi9BZG1pbkFkZEJyYW5kUGFnZVwiO1xuaW1wb3J0IHsgQWRtaW5TdWJDYXRlZ29yeVBhZ2UgfSBmcm9tIFwiLi9QYWdlcy9BZG1pbi9BZG1pblN1YkNhdGVnb3J5UGFnZVwiO1xuaW1wb3J0IHsgQWRtaW5BZGRwcm91ZGN0c1BhZ2UgfSBmcm9tIFwiLi9QYWdlcy9BZG1pbi9BZG1pbkFkZFByb3VkY3RzUGFnZVwiO1xuaW1wb3J0IHsgVXNlckFsbE9yZGVyUGFnZSB9IGZyb20gXCIuL1BhZ2VzL1VzZXIvVXNlckFsbE9yZGVyUGFnZVwiO1xuaW1wb3J0IHsgVXNlclByb3VkY3RzRmF2b3Vydml0ZVBhZ2UgfSBmcm9tIFwiLi9QYWdlcy9Vc2VyL1VzZXJQcm91ZGN0c0Zhdm91cnZpdGVQYWdlXCI7XG5pbXBvcnQgeyBVc2VyQWxsQWRyZXNzUGFnZSB9IGZyb20gXCIuL1BhZ2VzL1VzZXIvVXNlckFsbEFkcmVzc1BhZ2VcIjtcbmltcG9ydCB7IFVzZXJBZGRBZHJlZXNQYWdlIH0gZnJvbSBcIi4vUGFnZXMvVXNlci9Vc2VyQWRkQWRyZWVzUGFnZVwiO1xuaW1wb3J0IHsgVXNlckVkaXRBZHJlc3NQYWdlIH0gZnJvbSBcIi4vUGFnZXMvVXNlci9Vc2VyRWRpdEFkcmVzc1BhZ2VcIjtcbmltcG9ydCB7IFVzZXJQcm9maWxlUGFnZSB9IGZyb20gXCIuL1BhZ2VzL1VzZXIvVXNlclByb2ZpbGVQYWdlXCI7XG5pbXBvcnQgeyBBZG1pbkVkaXRQcm91ZGN0UGFnZSB9IGZyb20gXCIuL1BhZ2VzL0FkbWluL0FkbWluRWRpdFByb3VkY3RQYWdlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9SZWR1eFRvbGxLaXQvU3RvcmVcIjtcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkUGFnZSB9IGZyb20gXCIuL0NvbXBvbmVudHMvQXV0aC9Gb3JnZXRQYXNzd29yZFBhZ2VcIjtcbmltcG9ydCB7IFZlcmZpeUNvZGVQYWdlIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9BdXRoL1ZlcmZpeUNvZGVQYWdlXCI7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUGFnZSB9IGZyb20gXCIuL0NvbXBvbmVudHMvQXV0aC9SZXNldFBhc3N3b3JkUGFnZVwiO1xuaW1wb3J0IHsgRWRpdFJhdGUgfSBmcm9tIFwiLi9Db21wb25lbnRzL1JhdGUvRWRpdFJhdGVcIjtcbmltcG9ydCB7IEFkbWluQWRkQ29wb3VuUGFnZSB9IGZyb20gXCIuL1BhZ2VzL0FkbWluL0FkbWluQWRkQ29wb3VuUGFnZVwiO1xuaW1wb3J0IHsgQWRtaW5FZGl0Q291cG9uIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9BZG1pbi9BZG1pbkVkaXRDb3Vwb25cIjtcbmltcG9ydCB7IEFkbWluRWRpdENvdXBvblBhZ2UgfSBmcm9tIFwiLi9QYWdlcy9BZG1pbi9BZG1pbkVkaXRDb3Vwb25QYWdlXCI7XG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIi4vQ29tcG9uZW50cy91dGlscy9wcm90ZWN0ZWRyb3V0ZVwiO1xuaW1wb3J0IHsgUHJvdWRjdHNCeUNhdGdvcmV5IH0gZnJvbSBcIi4vUGFnZXMvUHJvdWRjdHMvUHJvdWRjdHNCeUNhdGdvcmV5XCI7XG5pbXBvcnQgeyBQcm91ZGN0c0J5QnJhbmQgfSBmcm9tIFwiLi9QYWdlcy9Qcm91ZGN0cy9Qcm91ZGN0c0J5QnJhbmRcIjtcbmltcG9ydCBUZXJtc1BhZ2UgZnJvbSBcIi4vUGFnZXMvdXRpbC9UZXJtc1BhZ2VcIjtcbmltcG9ydCBQcml2YWN5UG9saWN5UGFnZSBmcm9tIFwiLi9QYWdlcy91dGlsL1ByaXZhY3lQb2xpY3lQYWdlXCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vUGFnZXMvdXRpbC9Db250YWN0UGFnZVwiO1xuLy9cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPFJvb3RMYXlvdXQgLz4sXG4gICAgZXJyb3JFbGVtZW50OiA8RXJyb3JQYWdlIC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICBlbGVtZW50OiA8SG9tZVBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxMb2dpblBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxSZWdpc3RlclBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImFsbENhdGVnb3J5XCIsXG4gICAgICAgIGVsZW1lbnQ6IDxBbGxDYXRlZ29yeSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiYWxsYnJhbmRcIixcbiAgICAgICAgZWxlbWVudDogPEFsbEJyYW5kIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJhbGxwcnVkY3RzXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxTaG9wUHJvdWRjdHNQYWdlIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYWxscHJ1ZGN0cy86aWRcIixcbiAgICAgICAgZWxlbWVudDogPFByb3VkY3REZXRhaWxlc1BhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImNhcnRcIixcbiAgICAgICAgZWxlbWVudDogPENhcnRQYWdlIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvdXNlci9mb3JnZXQtcGFzc3dvcmRcIixcbiAgICAgICAgZWxlbWVudDogPEZvcmdldFBhc3N3b3JkUGFnZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3VzZXIvdmVyaWZ5Q29kZVwiLFxuICAgICAgICBlbGVtZW50OiA8VmVyZml5Q29kZVBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi91c2VyL3Jlc3RQYXNzd29yZFwiLFxuICAgICAgICBlbGVtZW50OiA8UmVzZXRQYXNzd29yZFBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9hbGxDYXRlZ29yeS86aWRcIixcbiAgICAgICAgZWxlbWVudDogPFByb3VkY3RzQnlDYXRnb3JleSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2FsbGJyYW5kLzppZFwiLFxuICAgICAgICBlbGVtZW50OiA8UHJvdWRjdHNCeUJyYW5kIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvdGVybXNcIixcbiAgICAgICAgZWxlbWVudDogPFRlcm1zUGFnZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3ByaXZhY3ktcG9saWN5XCIsXG4gICAgICAgIGVsZW1lbnQ6IDxQcml2YWN5UG9saWN5UGFnZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgZWxlbWVudDogPENvbnRhY3RQYWdlIC8+LFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBlbGVtZW50OiA8UHJvdGVjdGVkUm91dGUgYXV0aHdSb2xlPVwidXNlclwiIC8+LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiY2FydC9wYXlcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxDaG9vc2VQYXlQYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvdXNlci9hbGxvcmRlclwiLFxuICAgICAgICAgICAgZWxlbWVudDogPFVzZXJBbGxPcmRlclBhZ2UgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi91c2VyL2Zhdm9yaXRlcHJvdWRjdFwiLFxuICAgICAgICAgICAgZWxlbWVudDogPFVzZXJQcm91ZGN0c0Zhdm91cnZpdGVQYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvdXNlci9hZHJlc3NcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxVc2VyQWxsQWRyZXNzUGFnZSAvPixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL3VzZXIvYWRkLWFkcmVzc1wiLFxuICAgICAgICAgICAgZWxlbWVudDogPFVzZXJBZGRBZHJlZXNQYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvdXNlci9lZGl0LWFkcmVzcy86aWRcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxVc2VyRWRpdEFkcmVzc1BhZ2UgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi91c2VyL3Byb2ZpbGVcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxVc2VyUHJvZmlsZVBhZ2UgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9FZGl0UmV2aWV3LzppZFwiLFxuICAgICAgICAgICAgZWxlbWVudDogPEVkaXRSYXRlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBlbGVtZW50OiA8UHJvdGVjdGVkUm91dGUgYXV0aHdSb2xlPVwiYWRtaW5cIiAvPixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9hZG1pbi9hbGxwcm91ZGN0XCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QWRtaW5BbGxQcm91ZGN0IC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvYWRtaW4vYWxsb3JkZXJzXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QW1pZG5BbGxPcmRlcnMgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9hZG1pbi9hbGxvcmRlcnMvOmlkXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QWRtaW5PcmRlcnNEZXRhaWxzUGFnZSAvPixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL2FkbWluL2FkZGJyYW5kXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QWRtaW5BZGRCcmFuZFBhZ2UgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9hZG1pbi9jYXRlZ29yeVwiLFxuICAgICAgICAgICAgZWxlbWVudDogPEFkbWluQWxsQ2F0ZWdvcnlQYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvYWRtaW4vc3ViY2F0ZWdvcnlcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxBZG1pblN1YkNhdGVnb3J5UGFnZSAvPixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL2FkbWluL2FkZHByb3VkY3RzXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QWRtaW5BZGRwcm91ZGN0c1BhZ2UgLz4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9hZG1pbi9lZGl0LzppZFwiLFxuICAgICAgICAgICAgZWxlbWVudDogPEFkbWluRWRpdFByb3VkY3RQYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvYWRtaW4vYWRkY29wb3VuXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8QWRtaW5BZGRDb3BvdW5QYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvYWRtaW4vZWRpdGNvdXBvbi86aWRcIixcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxBZG1pbkVkaXRDb3Vwb25QYWdlIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dKTtcbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgPC9Qcm92aWRlcj4sXG4pO1xuIl19