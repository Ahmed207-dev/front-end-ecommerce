import uploadimpage from "../../Images/imagepload.png";
import { CiCirclePlus } from "react-icons/ci";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AddProudctHook from "../../CustomHook/proudct/AddProudctHook";
import MultiselectPackge from "multiselect-react-dropdown";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const AdminAddproudcts = () => {
  const Multiselect = MultiselectPackge.default;
  const [
    removeFile,
    getRootProps,
    isDragActive,
    getInputProps,
    files,
    prodName,
    setProdName,
    prodDes,
    setProdDes,
    Qty,
    setQty,
    prodDiscount,
    setProdDiscount,
    prodPrice,
    setProdPrice,
    categorey,
    handleCategory,
    options,
    onSelect,
    onRemove,
    setBrandID,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit,
    isPress,
  ] = AddProudctHook();

  return (
    <>
      <div>
        <div className="admin-content-text py-2 mb-3">اضافه منتج جديد</div>
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #0d6efd",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "15px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: isDragActive ? "#e9ecef" : "#f8f9fa",
            minHeight: "130px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <input {...getInputProps()} />

          {files.length === 0 && (
            <p className="m-4 text-muted">
              {isDragActive
                ? "أسقط الصور هنا..."
                : "اسحب الصور وأسقطها هنا، أو اضغط لاختيار الصور"}
            </p>
          )}

          {files?.map((file, index) => (
            <div
              key={file.name}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90px",
                height: "90px",
              }}
            >
              <img
                src={file.preview}
                alt={file.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="delete-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <form className="form-admin" action="">
          <input
            type="text"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
          <textarea
            name=""
            id=""
            placeholder="وصف المنتج"
            value={prodDes}
            onChange={(e) => setProdDes(e.target.value)}
          ></textarea>
          <input
            type="number"
            placeholder="الكميه"
            value={Qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <input
            type="number"
            placeholder="السعر قبل الخصم"
            value={prodDiscount}
            onChange={(e) => setProdDiscount(e.target.value)}
          />
          <input
            type="number"
            placeholder="السعر"
            value={prodPrice}
            onChange={(e) => setProdPrice(e.target.value)}
          />
          <select name="" id="" onChange={handleCategory}>
            <option value="0">التنصيف الرئيسي</option>
            {categorey?.map((category, index) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>

          <Multiselect
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            className="mt-2 text-end"
            placeholder="تصنيف فرعي"
          />
          <select name="" id="" onChange={(e) => setBrandID(e.target.value)}>
            <option value="0">الماركه</option>
            {brand?.records?.map((brand, index) => (
              <option value={brand?._id} key={brand?._id}>
                {brand?.name}
              </option>
            ))}
          </select>
          <label htmlFor="">الالوان المتاحه</label>
          <div style={{ display: "flex", gap: "10px" }}>
            {colors?.map((col, i) => (
              <div
                key={i}
                className="rounded-circle"
                style={{
                  backgroundColor: col,
                  width: "30px",
                  height: "30px",
                  position: "relative",
                }}
              >
                <button onClick={() => removeColor(i)} className="delete-btn">
                  ×
                </button>
              </div>
            ))}
            <CiCirclePlus
              onClick={() => setShowColor(!showColor)}
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            {showColor && (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            )}
          </div>
          <div className="d-flex justify-content-end pb-3">
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              disabled={isPress === true}
              onClick={handleSubmit}
              className="btn btn-dark"
            >
              اضافه منتج
              {isPress === true ? <LoadingPage /> : null}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
