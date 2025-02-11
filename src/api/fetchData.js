import axios from "axios";

export const fetchData = async function (query, page) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API = `https://pixabay.com/api/?q=${query}&page=${page}1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const { data } = await axios.get(API);

  return data;
};
