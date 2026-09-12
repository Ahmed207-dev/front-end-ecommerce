import shoes1 from "../../Images/shoes1.jpg";
import shoes2 from "../../Images/shoes2.jpg";
import { Link } from "react-router-dom";

export const Slider = () => {
  return (
    <div className="container mt-3">
      <div
        id="mainSlider"
        className="carousel slide shadow-lg rounded-4 overflow-hidden position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-3">
          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mainSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src={shoes2}
              className="d-block w-100 object-fit-cover slider-img-wrapper"
              style={{ maxHeight: "450px", filter: "brightness(0.85)" }}
              alt="Nike Shoes"
            />

            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center text-start h-100 top-0 bottom-0 start-0 pe-4 ps-5">
              <span className="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill fw-bold mb-2 shadow-sm">
                خصم لفترة محدودة
              </span>
              <h2 className="fw-bold text-white display-6 mb-2">
                أحدث الأحذية الرياضية من
                <span className="text-warning">Nike</span>
              </h2>
              <p className="text-light fs-6 mb-3 d-none d-md-block">
                تصميم مريح وأداء استثنائي يناسب تمارينك اليومية بأعلى جودة.
              </p>
              <Link
                to="/allprudcts"
                className="btn btn-dark text-white btn-lg px-4 py-2 rounded-pill fw-bold shadow-sm"
              >
                تسوق الآن
              </Link>
            </div>
          </div>

          <div className="carousel-item position-relative">
            <img
              src={shoes1}
              className="d-block w-100 object-fit-cover slider-img-wrapper"
              style={{ maxHeight: "450px", filter: "brightness(0.85)" }}
              alt="Nike Shoes"
            />
            <div className="carousel-caption d-flex flex-column align-items-start justify-content-center text-start h-100 top-0 bottom-0 start-0 pe-4 ps-5">
              <span className="badge bg-danger text-white fs-6 px-3 py-2 rounded-pill fw-bold mb-2 shadow-sm">
                عروض حصرية
              </span>
              <h2 className="fw-bold text-white display-6 mb-2">
                تشكيلة رياضية جديدة 2026
              </h2>
              <Link
                to="/allprudcts"
                className=" btn btn-danger btn-lg px-4 py-2 rounded-pill fw-bold shadow-sm hover-scale"
              >
                إكتشف المزيد
              </Link>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev custom-carousel-btn ms-2"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">السابق</span>
        </button>

        <button
          className="carousel-control-next custom-carousel-btn me-2"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">التالي</span>
        </button>
      </div>
    </div>
  );
};
