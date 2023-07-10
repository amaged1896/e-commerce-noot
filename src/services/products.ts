import api from "./api";

export async function fetchProducts() {
  const response = await api.get('/products');
  return response;
}
export async function createProduct(data) {
  console.log(data);
  const response = await api.post('/products/create/', data, );
  return response;
}

export async function fetchAllCategories() {
  const response = await api.get("/category");
  return response.data.results.map((category: any) => ({
    value: category.id,
    label: category.name,
  }));
}

export async function fetchAttributes() {
  const response = await api.get("/products/variants/attribute");
  return response.data.results.map((attr: any) => ({
    value: attr.id,
    label: attr.name,
  }));
}

