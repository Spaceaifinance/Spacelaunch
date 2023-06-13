import { useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'
import { INFO_CLIENT } from 'config/constants/endpoints'
import { TOKEN_BLACKLIST } from 'config/constants/info'
import { getDeltaTimestamps } from 'views/Info/utils/infoQueryHelpers'

interface TopTokensResponse {
  tokenDayDatas: {
    id: string
  }[]
}

/**
 * Tokens to display on Home page
 * The actual data is later requested in tokenData.ts
 * Note: dailyTxns_gt: 300 is there to prevent fetching incorrectly priced tokens with high dailyVolumeUSD
 */
const fetchTopTokens = async (timestamp1mAgo: number): Promise<string[]> => {
  try {
    const query = gql`
      query topTokens($blacklist: [String!], $timestamp1mAgo: Int) {
        tokenDayDatas(
          first: 30
          where: { dailyTxns_gt: 1, id_not_in: $blacklist, date_gt: $timestamp1mAgo }
          orderBy: dailyVolumeUSD
          orderDirection: desc
        ) {
          id
        }
      }
    `
    const data = await request<TopTokensResponse>(INFO_CLIENT, query, { blacklist: TOKEN_BLACKLIST, timestamp1mAgo })

    console.log(timestamp1mAgo,"data");
    console.log(data,"data");
    // tokenDayDatas id has compound id "0xTOKENADDRESS-NUMBERS", extracting token address with .split('-')
    return data.tokenDayDatas.map((t) => t.id.split('-')[0])
  } catch (error) {
    console.error('Failed to fetch top tokens', error)
    return []
  }
}

/**
 * Fetch top addresses by volume
 */
const useTopTokenAddresses = (): string[] => {
  const [topTokenAddresses, setTopTokenAddresses] = useState([])
  const [timestamp24hAgo,,,,timestamp1mAgo] = getDeltaTimestamps()

  useEffect(() => {
    const fetch = async () => {
      const addresses = await fetchTopTokens(timestamp1mAgo)
      setTopTokenAddresses(addresses)
    }
    if (topTokenAddresses.length === 0) {
      fetch()
    }
  }, [topTokenAddresses, timestamp1mAgo])

  return topTokenAddresses
}

export default useTopTokenAddresses
