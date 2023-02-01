import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "59919cdbe8msh0ba5d2bbed35891p10a691jsnc9e823a97f57",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (bilder) => ({
    getCryptos: bilder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});
export const { useGetCryptosQuery } = cryptoApi;
/* method: 'GET',
url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ/coins',
params: {
  referenceCurrencyUuid: 'yhjMzLPhuIDl',
  limit: '50',
  offset: '0',
  orderBy: '24hVolume',
  orderDirection: 'desc'
},
headers: {
  'X-RapidAPI-Key': '59919cdbe8msh0ba5d2bbed35891p10a691jsnc9e823a97f57',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
}; */
