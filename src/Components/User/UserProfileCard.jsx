import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserProfileHook from "../../CustomHook/user/UserProfileHook";
import { ToastContainer } from "react-toastify";

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
        <div className="bg-white rounded-4 shadow-sm  mb-4">
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

            <div
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
              onClick={() => setShow(!show)}
            >
              <Link to="">
                <FaEdit style={{ color: "black" }} />
              </Link>
              <span>تعديل</span>
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
                <input value={name} onChange={changName} type="text" />
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
