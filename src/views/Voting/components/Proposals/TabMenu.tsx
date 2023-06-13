import React from 'react'
import styled from 'styled-components'
import { TabMenu as UIKitTabMenu, Tab, Flex, VerifiedIcon, CommunityIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { ProposalType } from 'state/types'

interface TabMenuProps {
  proposalType: ProposalType
  onTypeChange: (proposalType: ProposalType) => void
}

const StyledTabMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.input};
  padding-top: 16px;
`

const getIndexFromType = (proposalType: ProposalType) => {
  switch (proposalType) {
    case ProposalType.COMMUNITY:
      return 1
    case ProposalType.ALL:
      return 2
    default:
      return 0
  }
}

const getTypeFromIndex = (index: number) => {
  switch (index) {
    case 1:
      return ProposalType.COMMUNITY
    case 2:
      return ProposalType.ALL
    default:
      return ProposalType.COMMUNITY
  }
}
const TabMenu: React.FC<TabMenuProps> = ({ proposalType, onTypeChange }) => {
  const { t } = useTranslation()

  return (
    <StyledTabMenu>
        <Tab>
          {' '}
          <Flex alignItems="center">
            <CommunityIcon color="currentColor" mr="4px" />
            All Proposals
          </Flex>
        </Tab>
    </StyledTabMenu>
  )
}

export default TabMenu
