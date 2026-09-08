import { configureStore } from "@reduxjs/toolkit";
import { CategoerySlice } from "./Slice/CategorySlice";
import { BrandSlice } from "./Slice/BrandSlice";
import { SubCategoerySlice } from "./Slice/SubCategorySlice";
import { Proudctslice } from "./Slice/ProudctSlice";
import { userSlice } from "./Slice/AuthenticationSlice";
import { reveiwSlice } from "./Slice/ReveiwSlice";
import { WishlistSlice } from "./Slice/WishlistSlice";
import { couponSlice } from "./Slice/CouponSlice";
import { addressSlice } from "./Slice/AddressSlice";
import { UpdateUserDataSlice } from "./Slice/UpdateUserSlice";
import { cartSlice } from "./Slice/CartSlice";
import { orderSlice } from "./Slice/CheckOutSlice";

export const store = configureStore({
  reducer: {
    categorey: CategoerySlice.reducer,
    brand: BrandSlice.reducer,
    subcategory: SubCategoerySlice.reducer,
    proudct: Proudctslice.reducer,
    users: userSlice.reducer,
    review: reveiwSlice.reducer,
    Wishlist: WishlistSlice.reducer,
    coupon: couponSlice.reducer,
    address: addressSlice.reducer,
    profile: UpdateUserDataSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
  },
});
