import axios from 'axios';
import { APIResponse } from './apiTypes';

const myApiKey = 'j_uEFQ_tCj9u552Vl8G3rL2Knowhn856-NdsV7ba6Ww';

axios.defaults.headers.common['Authorization'] = `Client-ID ${myApiKey}`;
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (
  query: string,
  currentPage: number
): Promise<APIResponse> => {
  const response = await axios.get<APIResponse>('/search/photos', {
    params: {
      query: query,
      page: currentPage,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response.data;
};
