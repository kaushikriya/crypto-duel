"use client"

import { wagmiConfig } from "@/app/Config"
import { Context } from "@/app/Contexts/ClientContext"
import { useContext } from "react"
import { useAccount, useConnect } from "wagmi"
import { disconnect } from "wagmi/actions"
import { injected } from "wagmi/connectors"


export const Header=()=>{
    const account = useAccount()
    const {connect } = useConnect()

    const {orchestratorClient} = useContext(Context)

    console.log(orchestratorClient?.getGameAddress)

    return(<div>
        {account.isConnected ? <button onClick={()=>disconnect(wagmiConfig)} >Disconnect</button>:  <button onClick={()=>connect({connector: injected()})}>Connect</button> }
    </div>)
}