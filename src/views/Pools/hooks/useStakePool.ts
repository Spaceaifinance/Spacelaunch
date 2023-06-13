import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useMasterchef, useSousChef } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: "266665",
}

const sousStake = async (sousChefContract, amount, decimals = 18) => {
  let gasPrice = getGasPrice()
  console.log("asdsad",sousChefContract.address,gasPrice,"sousChefContract.contract",gasPrice === "10000000000");
  if(sousChefContract.address === '0xf7CeE36A0A148403bA0343f3e2DF3c2C7212B4b4' || sousChefContract.address === '0x74C4fE8aAfF9CD8BE99d73C2aCa8Aff49102A57d' || sousChefContract.address === '0x6a08a56752d083b49a84136b7d1e5a37ef27dfed' || sousChefContract.address === '0x6080d7a6c5267fce32721778556375b41cc9b4c9'){
    gasPrice = "150000000000";
  }
  
  console.log(gasPrice);
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const sousStakeBnb = async (sousChefContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      console.log("handle Staked called : ",sousChefContract.address,sousId,isUsingBnb);
      if (sousId === 0) {
        await stakeFarm(masterChefContract, 0, amount)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount)
      } else {
        await sousStake(sousChefContract, amount, decimals)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStakePool
