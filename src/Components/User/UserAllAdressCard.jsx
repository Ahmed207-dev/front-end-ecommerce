import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllAddressHook from "../../CustomHook/user/AllAddressHook";
import { ToastContainer } from "react-toastify";

export const UserAllAdressCard = ({ item }) => {
  const [data, onClickDelete] = AllAddressHook();
  return (
    <>
      <div
        className="bg-white rounded-4 shadow-sm p-4 mb-4"
        style={{ color: "gray" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{item?.alias}</p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                onClickDelete(item._id);
              }}
            >
              <MdOutlineDelete /> <span>حذف</span>
            </div>
            <Link to={`/user/edit-adress/${item?._id}`}>
              <FaEdit style={{ color: "black" }} />
            </Link>
            <span>تعديل</span>
          </div>
        </div>
        <div> {item?.details}</div>
        <div> {item?.phone} </div>
      </div>
      <ToastContainer />
    </>
  );
};
