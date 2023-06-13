import { SerializedFarm } from 'state/types'
import fetchPublicFarmData from './fetchPublicFarmData'

const fetchFarm = async (farm: SerializedFarm): Promise<SerializedFarm> => {
  const farmPublicData = await fetchPublicFarmData(farm)
  console.log("fetchFarm 1 : ",farmPublicData)
  return {...farmPublicData , ...farm }
}

export default fetchFarm
