import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserProfileHook from "../../CustomHook/user/UserProfileHook";
import { ToastContainer } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const UserProfileCard = () => {
  const [
    user,
    show,
    setShow,
    name,
    phone,
    email,
    changName,
    changePhone,
    changeEmail,
    onSubmit,
  ] = UserProfileHook();

  return (
    <>
      <div>
        <div className="bg-white rounded-4 shadow-sm  mb-2 p-3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ display: "flex", gap: "5px", fontSize: "20px" }}>
              الاسم:
              <span style={{ color: "gray" }}> {user?.name}</span>
            </span>

            <div onClick={() => setShow(!show)}>
              <Link
                to=""
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <FaEdit style={{ color: "black" }} />
                <span>تعديل</span>
              </Link>
            </div>
          </div>
          <span
            style={{
              display: "flex",
              gap: "5px",
              fontSize: "20px",
              alignItems: "center",
            }}
          >
            رقم الهاتف:
            <span style={{ color: "gray", fontSize: "17px" }}>
              {user?.phone}
            </span>
          </span>
          <span
            style={{
              display: "flex",
              gap: "5px",
              fontSize: "20px",
              alignItems: "center",
            }}
          >
            الايميل:
            <span style={{ color: "gray", fontSize: "17px" }}>
              {user?.email}
            </span>
          </span>
        </div>
        {show && (
          <div className="user-modal-overlay">
            <div className="user-modal-container">
              <div>
                <h3>تعديل الصفحه الشخصيه</h3>
              </div>
              <div className="user-modal">
                <input value={name} onChange={changName} type="text" />{" "}
                {showPass ? <FaEye /> : <FaEyeSlash />}
                <input type="number" value={phone} onChange={changePhone} />
                <input type="email" value={email} onChange={changeEmail} />
              </div>
              <div>
                <button onClick={() => setShow(false)}>تراجع</button>
                <button onClick={onSubmit}>اضافه التعديل</button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};
