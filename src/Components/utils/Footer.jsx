import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section bg-white py-3 border-top">
      <div className="container-fluid px-4">
        <div className="row align-items-center justify-content-between gy-2">
          <div className="col-12 col-md-6 d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
            <Link
              to="/terms"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              الشروط والأحكام
            </Link>
            <Link
              to="/privacy-policy"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              سياسه الخصوصيه
            </Link>
            <Link
              to="/contact"
              className="text-secondary text-decoration-none fs-6 fw-semibold"
            >
              اتصل بنا
            </Link>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-3 justify-content-center justify-content-md-end">
            <div className="d-flex align-items-center gap-2 text-secondary fw-semibold">
              <a
                className="d-flex align-items-center gap-2"
                href="https://wa.me/201069876363"
                target="_blank"
                style={{ color: "gray", textDecoration: "none" }}
              >
                <FaPhoneAlt size={14} />
                <span>01069876363</span>
              </a>
            </div>

            <div className="d-flex align-items-center gap-3 text-secondary ms-2">
              <a
                href="https://www.facebook.com/ahmed.hamdy.862902"
                target="_blank"
                className="text-secondary"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/mahfooooo0z/"
                target="_blank"
                className="text-secondary"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
