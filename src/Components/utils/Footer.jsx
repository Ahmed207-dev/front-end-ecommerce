import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-section bg-white py-3 border-top">
      <div className="container-fluid px-4">
        <div className="row align-items-center justify-content-between gy-2">
          <div className="col-12 col-md-6 d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
            <a
              href="#"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              الشروط والأحكام
            </a>
            <a
              href="#"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              سياسه الخصوصيه
            </a>
            <a
              href="#"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              اتصل بنا
            </a>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 justify-content-center justify-content-md-end">
            <div className="d-flex align-items-center gap-2 text-secondary fw-semibold">
              <FaPhoneAlt size={14} />
              <span>01069876363</span>
            </div>

            <div className="d-flex align-items-center gap-3 text-secondary ms-2">
              <a href="#" className="text-secondary">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="text-secondary">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="text-secondary">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
