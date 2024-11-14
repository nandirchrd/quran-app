import axios, { AxiosResponse } from "axios";
import { SURAH } from "../types/enums";

interface IProps {
  surah?: SURAH;
}
export const getQuran = ({ surah }: IProps): Promise<AxiosResponse> => {
  if (surah) return axios.get(`/quran/${surah}`);

  return axios.get("/quran");
};

export default axios.create({
  baseURL: "https://quran-endpoint.vercel.app",
});
