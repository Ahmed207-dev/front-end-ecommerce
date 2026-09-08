import HomeCatgoeryHook from "../../CustomHook/Catgoery/HomeCatgoeryHook";
import LoadingPage from "../../CustomHook/Loading/LoadingPage";
import CategoryCard from "../catogery/Categorycard";
import { Subtitle } from "../utils/Subtitle";
export const HomeCatogery = () => {
  const [records, backgroundColor, loading] = HomeCatgoeryHook();

  return (
    <div className="container">
      <Subtitle title="التصنيفات" btntitle="المزيد" pathtext="/allCategory" />
      <div className="row d-flex my-2 justify-content-between">
        {loading ? (
          <LoadingPage />
        ) : (
          records
            .slice(0, 5)
            ?.map((categorey, i) => (
              <CategoryCard
                id={categorey._id}
                key={i}
                title={categorey.name}
                background={backgroundColor[i]}
                img={categorey.image}
              />
            ))
        )}
      </div>
    </div>
  );
};
