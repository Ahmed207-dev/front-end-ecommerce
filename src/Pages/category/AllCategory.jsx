import { Categorycontainer } from "../../Components/catogery/Categorycontainer";
import PaginationPage from "../../Components/utils/PaginationPage";
import AllCategoryHook from "../../CustomHook/Catgoery/AllCategoryHook";

export const AllCategory = () => {
  const [records, loading, pageCount, getpage] = AllCategoryHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <Categorycontainer data={records} loading={loading} />
      {pageCount > 1 ? (
        <PaginationPage pageCount={pageCount} onpress={getpage} />
      ) : null}
    </div>
  );
};
