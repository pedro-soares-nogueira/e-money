import { styled } from '@/styles/stitches.config'
import React, { ReactNode } from 'react'

interface DefaultLayout {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayout) => {
  return (
    <>
      <NavBar>E-Monney</NavBar>
      <Content>{children}</Content>
      <Footer>E-Monney</Footer>
    </>
  )
}

export default DefaultLayout

export const NavBar = styled("nav", {
  height: '50px',
  backgroundColor: "$blue800",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$xl',
  fontWeight: 'bold'
})

export const Content = styled("main", {
  height: "90vh",
  margin: '1rem'
})

export const Footer = styled("footer", {
  height: '50px',
  backgroundColor: "$blue800",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  fontWeight: 'bold'
})