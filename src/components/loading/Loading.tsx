import React, { FC } from 'react'

import { LoadingGif, Wrapper } from './styles'
import LoadingImage from '../../assets/loader.gif'

export const Loading: FC = () => {
  return (
    <Wrapper>
      <LoadingGif src={LoadingImage} alt="Loading..." />
    </Wrapper>
  )
}
