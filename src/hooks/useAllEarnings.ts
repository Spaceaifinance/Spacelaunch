import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getMasterChefAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import masterChefABI from 'config/abi/masterchef.json'
import useRefresh from './useRefresh'


const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllBalances = async () => {
      const calls = [
        // Balance of token in the LP contract
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [0, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [1, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [2, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [3, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [4, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [5, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [6, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [7, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [8, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [9, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [10, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [11, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [12, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [13, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [14, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [15, account],
        // },
        // {
        //   address: getMasterChefAddress(),
        //   name: 'pendingRise',
        //   params: [18, account],
        // }
      ]
      const res = await multicall(masterChefABI, calls)
      setBalance(res)
    }
    if (account) {
      fetchAllBalances()
    }
  }, [account, fastRefresh])

  return balances
}

export default useAllEarnings
