import { gameContractAbi } from '@/Constants/ABIs/RPS';
import { Contract } from '@/Utils/types';
import { Account, Chain, Hex, PublicClient, WalletClient } from "viem";

export class GameClient{
    private _publicClient: PublicClient|undefined
    private _walletClient: WalletClient|undefined
    private _chain: Chain|undefined

    private _contract: Contract|undefined



    init(publicClient: PublicClient, walletClient: WalletClient, gameContractAddress: string){
        this._publicClient= publicClient;
        this._walletClient= walletClient;
        this._chain= publicClient.chain;
        this._contract={
            abi: gameContractAbi,
            address: gameContractAddress as Hex
        }
    }

    async getFirstPlayerTimeout(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'j1Timeout'})
        }
    }

    async getSecondPlayerTimeout(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'j2Timeout'})
        }
    }

    async getFirstPlayerAddress(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'getFirstPlayerAddress'})
        }
    }

    async getStake(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'getStake'})
        }
    }

    async getTimeout(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'getTimeout'})
        }
    }

    async getLastAction(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'getLastAction'})
        }
    }

    async getSecondPlayerAddress(){
        if(this._contract){
            return this._publicClient?.readContract({...this._contract, functionName: 'getSecondPlayerAddress'})
        }
    }

    async setSecondPlayerMove(address:Account, move:number){
        if(this._contract){
            return this._walletClient?.writeContract({...this._contract, account: address,chain:this._chain, functionName:'play', args:[move]})
        }
    }

    async settleGame(address: Account, move:number, salt: number){
        if(this._contract){
            return this._walletClient?.writeContract({...this._contract, account: address,chain:this._chain, functionName:'solve', args:[move, salt]})
        }
    }
}