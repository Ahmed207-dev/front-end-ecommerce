import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import AddBrandHook from "../../CustomHook/Brand/AddBrandHook";

export const AdminAddBrand = () => {
  const [img, changephoto, name, setName, ispress, loading, handleSubmit] =
    AddBrandHook();
  return (
    <>
      <div className="mt-3 text-center">
        <div className="container  py-2">
          <div className="admin-content-text"> اضف ماركه جديده</div>
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
              disabled={ispress === true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="inp-admin-catgery"
              placeholder="اسم الماركه "
            />
          </div>
          {ispress && loading ? (
            <Spinner animation="border" role="status" variant="primary" />
          ) : ispress === true && loading === false ? (
            <div>
              <h2>تم الانتهاء</h2>
            </div>
          ) : null}
          <ToastContainer />
          <div className="d-flex justify-content-end">
            <button onClick={handleSubmit} className="btn btn-dark btn-save">
              اضافه ماركه
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
