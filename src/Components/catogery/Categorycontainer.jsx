import CategoryCard from "../catogery/Categorycard";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";

export const Categorycontainer = ({ data, loading }) => {
  const backgroundColor = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <div className="container">
      <div className="admin-content-text my-2">اشهر التصنيفات</div>
      <div className="row d-flex my-2 justify-content-between">
        {loading ? (
          <LoadingPage />
        ) : (
          data.map((categorey, i) => (
            <CategoryCard
              key={i}
              id={categorey?._id}
              title={categorey.name}
              background={backgroundColor[Math.floor(Math.random() * 5 + 1)]}
              img={categorey.image}
            />
          ))
        )}
      </div>
    </div>
  );
};
