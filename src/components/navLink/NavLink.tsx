import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { useLocation } from 'react-router-dom'

import { Label, Link } from './styles'
import { routes } from '../../navigation'

interface NavLinkProps {
  Icon: IconType
  to: routes
  label: string
}

export const NavLink: FC<NavLinkProps> = ({ Icon, to, label }) => {
  const location = useLocation()
  return (
    <Link to={to} isactive={location.pathname === to ? 1 : 0}>
      <Icon size={24} title={label} />
      <Label>{label}</Label>
    </Link>
  )
}
