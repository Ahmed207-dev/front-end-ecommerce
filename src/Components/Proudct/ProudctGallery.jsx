import { useParams } from "react-router-dom";
import prodImg from "../../Images/images.jfif";
import ProudctDetailesHook from "../../CustomHook/proudct/ProudctDetailesHook";
// oneitem?.record?.images
export const ProudctGallery = () => {
  const { id } = useParams();
  const [oneitem, images] = ProudctDetailesHook(id);

  return (
    <div
      id="carouselExample"
      className="carousel slide product-gallary-card d-flex justify-content-center align-items-center carsoul-img"
    >
      <div className="carousel-inner">
        {images?.map((src, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img
              src={src?.org}
              className="d-block "
              style={{ width: "300px", margin: "10px auto" }}
              alt="product"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
