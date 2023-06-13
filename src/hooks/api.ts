import { useEffect, useState } from 'react'

/* eslint-disable camelcase */



export interface pricePair {
  name: string
  symbol: string
  price: number
  price_BNB: number
}

export interface DeBankTvlResponse {
  update_at: string
  data: {
    [key: string]: pricePair
  }
}

export const useGetStats = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.wrise.app/api/getTokenPrice')
        const responseData = await response.json()
        setData(responseData.data.price)
        console.log(responseData,"responseData");
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export const useGetTotalLiquidity = () => {
  const [dataLiquidity, setDataLiquidity] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wrise-info-api.vercel.app/api/pairs')
        const responseData = await response.json()
        console.log(responseData);
        setDataLiquidity(responseData.data)
        console.log(responseData,"responseData");
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }
    fetchData()
  }, [setDataLiquidity])
  return dataLiquidity
}


export const useGetreferCount = (account : string) => {
  const [datarefer, setDatarefer] = useState(0)
  // useEffect(() => {
  //   const fetchDatarefer = async () => {
  //     try {
  //       const response = await fetch(`https://api.wrise.app/api/getchildCount/${account}`)
  //       const responseData = await response.json()
  //       if(responseData.status){
  //         setDatarefer(responseData.childcount);
  //       }else{
  //         setDatarefer(0)
  //       }
  //     } catch (error) {
  //       console.error('Unable to fetch data:', error)
  //     }
  //   }
  //   fetchDatarefer()
  // }, [account,setDatarefer])

  return datarefer
}
export const useGetreferCommissionCount = (account : string) => {
  // const [datareferCommission, setDatareferCommission] = useState(0)
  // useEffect(() => {
  //   const fetchDatareferCommsion = async () => {
  //     try {
  //       const response = await fetch(`https://api.wrise.app/api/getReferralCommission/${account}`)
  //       const responseData = await response.json()
  //       if(responseData.status){
  //         setDatareferCommission(responseData.commission);
  //       }else{
  //         setDatareferCommission(0)
  //       }
  //     } catch (error) {
  //       console.error('Unable to fetch data:', error)
  //     }
  //   }
  //   fetchDatareferCommsion()
  // }, [account,setDatareferCommission])

  // return datareferCommission
  return 0
}
