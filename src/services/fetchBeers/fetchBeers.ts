import axios, { AxiosResponse } from 'axios';
import type { Beer } from './types';
import { BASE_URL } from './constants';


export const fetchBeers = async (page: number): Promise<Beer[]> => {
  try {
    const response: AxiosResponse<Beer[]> = await axios.get(`${BASE_URL}/beers?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching beers:', error);
    return [];
  }
};
