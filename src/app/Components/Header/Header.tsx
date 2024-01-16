"use client"

import { useAccount, useConnect } from "wagmi"
import { injected } from "wagmi/connectors"


export const Header=()=>{
    const account = useAccount()
    const {connect} = useConnect()
    console.log(account)

    return(<div>
        <button onClick={()=>connect({connector: injected()})}>Connect</button>
    </div>)
}