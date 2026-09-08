import logo from "../../Images/images.jfif";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import navBarHook from "../../CustomHook/navbar/navBarHook";
import { useNavigate } from "react-router-dom";
import GetAllCartHook from "../../CustomHook/cart/GetAllCartHook";
export const NavBarLogin = () => {
  const navigate = useNavigate();
  const [onChangeWord, searchWord] = navBarHook();
  const [cartItems, status] = GetAllCartHook();

  let word = "";
  let user = "";
  if (localStorage.getItem("SearchWord") !== null) {
    word = localStorage.getItem("SearchWord");
  } else {
    word = "";
  }
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  } else {
    user = "";
  }
  const sigonout = () => {
    navigate("/");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            onChange={onChangeWord}
            value={word}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user?.name ? (
              <li className="nav-item dropdown nav-text d-flex  justify-content-center">
                <a
                  className="nav-link dropdown-toggle"
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
                        onClick={() => {
                          navigate("/admin/allproudct");
                        }}
                        className="dropdown-item"
                      >
                        لوحه التحكم
                      </a>
                    </li>
                  ) : (
                    <li>
                      <a
                        onClick={() => {
                          navigate("user/profile");
                        }}
                        className="dropdown-item"
                      >
                        الصفحه الشخصيه
                      </a>
                    </li>
                  )}

                  <li>
                    <a onClick={sigonout} className="dropdown-item" href="#">
                      تسجيل خروج
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <CgProfile />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center cart"
              style={{ color: "white" }}
            >
              <span className="cart-logo">
                <FaShoppingCart />
                <span className="cart-num">{status?.numOfCartItems || 0}</span>
              </span>
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
