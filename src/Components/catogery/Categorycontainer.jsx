import CategoryCard from "../catogery/Categorycard";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const Categorycontainer = ({ data, loading }) => {
  return (
    <div className="container">
      <div className="admin-content-text my-3 fs-3">اشهر التصنيفات</div>
      <div className="row d-flex my-2 justify-content-between">
        {loading ? (
          <LoadingPage />
        ) : (
          data.map((categorey, i) => (
            <CategoryCard
              key={i}
              id={categorey?._id}
              title={categorey.name}
              img={categorey.image}
            />
          ))
        )}
      </div>
    </div>
  );
};
