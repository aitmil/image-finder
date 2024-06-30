import axios from "axios";

const myApiKey = "j_uEFQ_tCj9u552Vl8G3rL2Knowhn856-NdsV7ba6Ww";

axios.defaults.headers.common["Authorization"] = `Client-ID ${myApiKey}`;
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data;
};
