import discount from "../../Images/discount.png";

const Discount = () => {
  return (
    <>
      <div className="container discount-backcolor d-flex justify-content-around align-items-center">
        <p className="discount-title">خصم يصل الي 50 % علي كل الاجهزه</p>
        <img className="discount-img" src={discount} alt="" />
      </div>
    </>
  );
};

export default Discount;
