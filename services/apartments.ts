import axios from "axios";

const API_URL = "https://apartment-listing-bice.vercel.app";

export const getApartments = async () => {
  const response = await axios.get(`${API_URL}/api/apartments`);
  return response.data;
};

export const getApartmentDetails = async (apartmentId: number) => {
  const response = await axios.get(`${API_URL}/api/apartments/${apartmentId}`);
  return response.data;
};
