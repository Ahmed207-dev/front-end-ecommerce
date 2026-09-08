import baseUrl from "../Api/BaseURL";

export const useInsurtData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.post(url, params, config);
  return {
    data: res.data,
    status: res.status,
  };
};

export const useInsurtDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseUrl.post(url, params, config);
  return {
    res: res.data,
    status: res.status,
  };
};
