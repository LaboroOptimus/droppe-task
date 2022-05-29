import axios from "axios";
import { Routes } from "../types";
import { BaseUrl } from "../components/const";

export const fetchProducts = async () => {
  const response = await axios.get(`${BaseUrl}/${Routes.Products}`);
  return response;
};

export const updateProducts = async (
  title: string,
  description: string,
  price: number
) => {
  const response = await axios.post(`${BaseUrl}/${Routes.Products}`, {
    title,
    description,
    price,
  });
  return response;
};
