import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoeryApi } from "../../ReduxTollKit/Slice/CategorySlice";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";
import { ToastContainer, toast } from "react-toastify";
import { AddSubCategorey } from "../../ReduxTollKit/Slice/SubCategorySlice";
import AddSubCategoryHook from "../../CustomHook/subcategory/AddSubCategoryHook";
export const AdminSubCategory = () => {
  const [name, setName, loading, records, handleChange, handleSubmit] =
    AddSubCategoryHook();
  return (
    <>
      <div>
        <div className="py-2 admin-content-text">اضافه تصنيف فرعي جديد</div>
        <div className="admin-inp-catgoery">
          <input
            type="text"
            placeholder="اسم التصنيف الفرعي الاول"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {loading ? (
            <LoadingPage />
          ) : (
            <select name="category" id="cat" onChange={handleChange}>
              <option value="0">اختر التصنيف</option>
              {records?.map((item, i) => (
                <option key={i} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn btn-dark  ">
            حفظ التعديلات
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
