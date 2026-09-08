import { Spinner } from "react-bootstrap";
import AddCategoreyHook from "../../CustomHook/Catgoery/AddCategoreyHook";
import { ToastContainer } from "react-toastify";

export const AdminAddCategory = () => {
  const [img, changephoto, setName, name, loading, isPress, handleSubmit] =
    AddCategoreyHook();
  return (
    <>
      <div className="mt-3 text-center">
        <div className="container py-2">
          <div className="admin-content-text">أضف تصنيف جديد</div>
          <div>
            <div>
              <label htmlFor="upload-photo">
                <img
                  src={img}
                  alt="fix"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", objectFit: "contain" }}
                />
              </label>
              <input
                type="file"
                id="upload-photo"
                name="photo"
                onChange={changephoto}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="inp-admin-catgery"
              placeholder="اسم تصنيف"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              disabled={isPress === true}
              onClick={handleSubmit}
              className="btn btn-dark btn-save"
            >
              حفظ التعديلات
            </button>
          </div>

          <div className="mt-3">
            {isPress && loading ? (
              <Spinner animation="border" role="status" variant="primary" />
            ) : isPress === true && loading === false ? (
              <div>
                <h2>تم الانتهاء</h2>
              </div>
            ) : null}
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
