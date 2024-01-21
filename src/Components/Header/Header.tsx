"use client"

import { useAccount, useConfig, useConnect } from "wagmi"
import { disconnect } from "wagmi/actions"


export const Header=()=>{
    const account = useAccount()
    const {connect } = useConnect()
    const config= useConfig()

    const handleConnectButton=()=>{
        if(account.address){
            disconnect(config)
        }else{
            connect({connector: config.connectors[0]})
        }

    }

    return(<div className="w-full h-[2%] bg-slate-800 flex justify-between items-center p-4 text-lg">
        <p>Crypto Duel</p>
        <button className="bg-purple-800 rounded-md p-1" onClick={handleConnectButton}>{account.address? 'Disconnect': 'Connect'}</button>
    </div>)
}