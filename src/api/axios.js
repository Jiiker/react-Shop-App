import axios from "axios";

async function request() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const { data } = response;

  return data;
}

export default request;
