"use client"

import { wagmiConfig } from "@/app/Config"
import { useAccount, useConnect } from "wagmi"
import { disconnect } from "wagmi/actions"
import { injected } from "wagmi/connectors"


export const Header=()=>{
    const account = useAccount()
    const {connect } = useConnect()
    console.log(account)

    return(<div>
        {account.isConnected ? <button onClick={()=>disconnect(wagmiConfig)} >Disconnect</button>:  <button onClick={()=>connect({connector: injected()})}>Connect</button> }
    </div>)
}