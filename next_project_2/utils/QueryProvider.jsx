"use client"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { useState } from "react";

export default function Provider({children}){
    const [client] =useState (()=>new QueryClient())
    return(
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialisOpen={false}/>
            {children}
        </QueryClientProvider>
    )

}