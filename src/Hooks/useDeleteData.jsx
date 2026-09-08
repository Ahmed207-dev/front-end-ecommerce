import baseUrl from "../Api/BaseURL";

export const useDeleteData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.delete(url, config);
  return res.data;
};
