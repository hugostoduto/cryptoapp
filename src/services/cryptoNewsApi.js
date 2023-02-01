import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "59919cdbe8msh0ba5d2bbed35891p10a691jsnc9e823a97f57",
  "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
};
const baseUrl = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (bilder) => ({
    getCryptoNews: bilder.query({
      query: () => createRequest("/news"),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
