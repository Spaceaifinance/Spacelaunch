import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Skeleton,Image } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  color:#000;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm, token, quoteToken }) => {
  const lableimage = lpLabel.split(' ')[0];
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
     <Image src={`/images/${lableimage}.png`} alt={lpLabel} width={64} height={64} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          {multiplier ? (
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          ) : (
            <Skeleton ml="4px" width={42} height={28} />
          )}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
