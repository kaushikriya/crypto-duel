import orchestratorAbi from '@/app/Constants/ABIs/Orchestrator.json'
import { Hex, PublicClient, WalletClient } from 'viem'
import { ORCHESTRATOR_ADDRESS } from '../Constants/ContractAddress/address'

export class OrchestratorClient{

  private orchestratorContract={
    abi: orchestratorAbi,
    address: ORCHESTRATOR_ADDRESS as Hex
   }


  private _publicClient: PublicClient|undefined
  private _walletClient: WalletClient|undefined

  init(publicClient: PublicClient, walletClient?: WalletClient){
    this._publicClient= publicClient
    this._walletClient= walletClient
  }

  async getGameAddress(){
    return this._publicClient?.readContract({...this.orchestratorContract, functionName:'getGameAddress' })
  }
}