import React, { ReactNode } from 'react'

import { Wrapper, MainContent } from './styles'
import { Navigation } from '../navigation/Navigation'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Navigation />
      <MainContent>{children}</MainContent>
    </Wrapper>
  )
}
