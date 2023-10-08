import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_REPHRASE_API_KEY;

export const rephraseApi = createApi({
    reducerPath: "rephrase",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://paraphrasing-and-rewriter-api.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('content-type', 'application/json',);
            headers.set('X-RapidAPI-Key', apiKey);
            headers.set('X-RapidAPI-Host', 'paraphrasing-and-rewriter-api.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        createRephrasedText: builder.mutation({
            query: (body) => ({
                url: '/rewrite-light',
                method: 'POST',
                body
            })
        })
    })
});

export const { useCreateRephrasedTextMutation } = rephraseApi;