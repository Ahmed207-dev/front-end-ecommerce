import baseUrl from "../Api/BaseURL";

export const useGetData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};
