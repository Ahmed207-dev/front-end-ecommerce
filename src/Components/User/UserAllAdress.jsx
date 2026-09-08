import { Link } from "react-router-dom";
import { UserAllAdressCard } from "./UserAllAdressCard";
import AllAddressHook from "../../CustomHook/user/AllAddressHook";

export const UserAllAdress = () => {
  const [data] = AllAddressHook();

  return (
    <>
      <div className="admin-content-text pb-2">العناوين</div>
      <div className="justify-content-center">
        {data?.map((item, index) => (
          <UserAllAdressCard key={index} item={item} />
        ))}
        <div className="d-flex justify-content-center">
          <Link
            to="/user/add-adress"
            className="btn btn-dark btn-save d-flex justify-content-center align-items-center "
          >
            اضافه عنوان جديد
          </Link>
        </div>
      </div>
    </>
  );
};
