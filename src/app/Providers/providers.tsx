"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { wagmiConfig } from "../Config"

export const Provider=({children}:{
    children: ReactNode
})=>{
    const queryClient = new QueryClient()
    return(<WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </WagmiProvider>)
}