import { useParams } from "react-router-dom";
import ProudctDetailesHook from "../../CustomHook/proudct/ProudctDetailesHook";
import AddToCartHook from "../../CustomHook/cart/AddToCartHook";
import { ToastContainer } from "react-toastify";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";
//
export const ProudctText = () => {
  const { id } = useParams();
  const [oneitem, images, oneCat, oneBrand] = ProudctDetailesHook(id);
  const [saveColor, colorIndex, addCart, isPress] = AddToCartHook(id, oneitem);
  return (
    <div className="d-flex flex-column text-end">
      <div className="cat-text text-secondary mb-1"> {oneCat?.name}:</div>
      <div className="cat-title fs-5 fw-bold text-dark mb-2">
        {oneitem?.title}
      </div>

      <div className="cat-rate d-flex align-items-center mb-3">
        <span className="text-warning fw-bold me-1">{oneitem?.rate}</span>
      </div>

      <div className="cat-market d-flex align-items-center my-2">
        <div className="cat-text text-secondary mb-1">الماركه :</div>
        <div className="cat-title fs-5 fw-bold text-dark mb-2"></div>
        <span className="fw-bold text-dark me-2">{oneBrand?.name}</span>
      </div>

      <div className="d-flex align-items-center my-2">
        {oneitem?.availableColors?.map((color, index) => (
          <div
            className="color ms-2 rounded-circle"
            key={index}
            onClick={() => {
              saveColor(index, color);
            }}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: colorIndex == index ? "2px solid black" : "none",
            }}
          ></div>
        ))}
      </div>
      <div className="cat-text text-secondary mb-1">
        الكميه : {oneitem?.quantity}
      </div>
      <div className="cat-title text-secondary mt-3 mb-1">المواصفات :</div>
      <div className="product-description text-secondary lh-lg mb-4">
        {oneitem?.description}
      </div>

      <div className="d-flex align-items-center mt-3 gap-4">
        <button className="product-price-btn border rounded px-3 py-2 me-3 bg-white fw-bold">
          {oneitem?.priceAfterDiscount ? (
            <div
              className="fw-bold fs-5 text-dark m-2"
              style={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                className="fs-6 fw-normal"
                style={{ textDecoration: "line-through" }}
              >
                {oneitem?.price}جنيه
              </span>
              <span>{oneitem?.priceAfterDiscount} جنيه</span>
            </div>
          ) : (
            <div className="fw-bold fs-5 text-dark">
              {oneitem?.price} <span className="fs-6 fw-normal">جنيه</span>
            </div>
          )}
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "140px",
            height: "45px",
          }}
          onClick={addCart}
          disabled={isPress === true}
          className="product-cart-btn btn btn-dark px-4 py-2 text-white"
        >
          اضف للعربة
          {isPress === true ? <LoadingPage /> : null}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
