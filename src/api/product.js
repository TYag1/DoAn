import instance from "./axiosClient";
const productAPI = {
  getAll: () => {
    const url = "/products";
    return instance.get(url);
  },
  getId: (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
  },
  remove: (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
  },
  add: (product) => {
    const url = `/products`;
    return instance.post(url, product);
  },
  update: (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
  },
};
export default productAPI;
