import API from "../utilities/api";

export const getProducts = (page_number) => {
  return API.get(`/products?_page=${page_number}&_limit=10`, {
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  });
};


export const getProductsByQuery = (search) => {
  return API.get(`/products?q=${search}`, {
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  });
};