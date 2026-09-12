import { useState } from "react";
import logo from "../../Images/images.jfif";
import { CgProfile } from "react-icons/cg";
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import navBarHook from "../../CustomHook/navbar/navBarHook";
import { useNavigate } from "react-router-dom";
import GetAllCartHook from "../../CustomHook/cart/GetAllCartHook";

export const NavBarLogin = () => {
  const navigate = useNavigate();
  const [onChangeWord, searchWord] = navBarHook();
  const [cartItems, status] = GetAllCartHook();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  let word = localStorage.getItem("SearchWord") || "";
  let user = "";
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const sigonout = () => {
    handleClose();
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="offcanvas-navbar"
          />

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <FormControl
              onChange={onChangeWord}
              value={word}
              type="search"
              placeholder="ابحث..."
              className="me-2 w-100 text-center"
              aria-label="Search"
            />
            <Nav className="me-auto align-items-center">
              {user?.name ? (
                <li className="nav-item dropdown nav-text d-flex justify-content-center">
                  <a
                    className="nav-link dropdown-toggle text-white m-1"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user?.name}
                  </a>
                  <ul className="dropdown-menu">
                    {user.role === "admin" ? (
                      <li>
                        <a
                          onClick={() => navigate("/admin/allproudct")}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          لوحة التحكم
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a
                          onClick={() => navigate("user/profile")}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                        >
                          الصفحة الشخصية
                        </a>
                      </li>
                    )}
                    <li>
                      <a
                        onClick={sigonout}
                        className="dropdown-item"
                        href="#"
                        style={{ cursor: "pointer" }}
                      >
                        تسجيل خروج
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <Nav.Link
                  href="/login"
                  className="nav-text d-flex align-items-center justify-content-center gap-1"
                >
                  <CgProfile size={15} />
                  <span className="text-white">دخول</span>
                </Nav.Link>
              )}

              <Nav.Link
                href="/cart"
                className="nav-text d-flex align-items-center justify-content-center cart text-white"
              >
                <span style={{ marginLeft: "4px" }} className="cart-logo">
                  <FaShoppingCart size={15} />
                  <span className="cart-num">
                    {status?.numOfCartItems || 0}
                  </span>
                </span>
                <span className="text-white">العربه</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="start"
        className="bg-dark text-white d-lg-none"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="border-bottom border-secondary d-flex justify-content-between flex-row-reverse"
        >
          <Offcanvas.Title>
            <a href="/">
              <img src={logo} className="logo" alt="logo" height="40" />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column gap-3">
          <FormControl
            onChange={onChangeWord}
            value={word}
            type="search"
            placeholder="ابحث..."
            className="text-center my-2"
          />

          {user?.name ? (
            <div className="d-flex align-items-center gap-3 p-3 bg-secondary bg-opacity-25 rounded-3 mb-2">
              <div className="bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center">
                <FaUser size={22} />
              </div>
              <div>
                <h6 className="mb-0 text-white">{user?.name}</h6>
                <small className="text-white-50">{user.role === "admin"}</small>
              </div>
            </div>
          ) : null}

          <Nav className="flex-column gap-2">
            {user?.name ? (
              <>
                {user.role === "admin" ? (
                  <Nav.Link
                    onClick={() => {
                      navigate("/admin/allproudct");
                      handleClose();
                    }}
                    className="text-white border-bottom border-secondary py-2 d-flex align-items-center gap-2"
                  >
                    <FaTachometerAlt /> لوحة التحكم
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    onClick={() => {
                      navigate("user/profile");
                      handleClose();
                    }}
                    className="text-white border-bottom border-secondary py-2 d-flex align-items-center gap-2"
                  >
                    <FaUser /> الصفحة الشخصية
                  </Nav.Link>
                )}

                <Nav.Link
                  onClick={sigonout}
                  className="text-danger border-bottom border-secondary py-2 d-flex align-items-center gap-2"
                >
                  <FaSignOutAlt /> تسجيل خروج
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                onClick={() => {
                  navigate("/login");
                  handleClose();
                }}
                className="text-white border-bottom border-secondary py-2 d-flex align-items-center gap-2"
              >
                <CgProfile size={18} /> تسجيل الدخول
              </Nav.Link>
            )}

            <Nav.Link
              onClick={() => {
                navigate("/cart");
                handleClose();
              }}
              className="text-white py-2 d-flex align-items-center justify-content-between"
            >
              <span className="d-flex align-items-center gap-2">
                <FaShoppingCart size={18} /> العربة
              </span>
              <span className="badge bg-danger rounded-pill">
                {status?.numOfCartItems || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
