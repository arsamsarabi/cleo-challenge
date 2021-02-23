import React from 'react'
import { FaMoneyBillAlt, FaCommentsDollar } from 'react-icons/fa'

import { routes } from '../../navigation'
import { NavLink } from '../navLink/NavLink'
import LogoImage from '../../assets/cleo-ai-ltd-logo-vector.svg'
import { Wrapper, Logo } from './styles'

interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
  return (
    <Wrapper>
      <Logo src={LogoImage} alt="Logo" />
      <NavLink label="Bills" to={routes.BILLS} Icon={FaMoneyBillAlt} />
      <NavLink label="Potential bills" to={routes.POTENTIAL_BILLS} Icon={FaCommentsDollar} />
    </Wrapper>
  )
}
