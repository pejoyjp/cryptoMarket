
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {

    'X-RapidAPI-Key': 'ed33171e4bmsh9dc699834a9f616p1b033cjsn090847d2512f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl:baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})


export const {useGetCryptosQuery} = cryptoApi
