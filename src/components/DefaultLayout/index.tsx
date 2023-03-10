import { styled } from '@/styles/stitches.config';
import { useRouter } from 'next/router';
import {
  Bell,
  Gear,
  House,
  List,
  SignOut,
  SketchLogo,
  UserCircle,
} from 'phosphor-react';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface DefaultLayout {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayout) => {
  const router = useRouter();
  return (
    <>
      <NavBar>
        <List size={28} weight="fill" />
        <div>
          <Bell size={28} weight="fill" />
          <SignOut size={28} weight="fill" />
        </div>
      </NavBar>
      <Layout>
        <SideBar>
          <div>
            <SideBarItem
              href={'/dashboard'}
              isActive={router.pathname === '/dashboard'}
            >
              <House size={22} />
              <span>Dashboard</span>
            </SideBarItem>

            <SideBarItem
              href={'/settings'}
              isActive={router.pathname === '/settings'}
            >
              <Gear size={22} />
              <span>Settings</span>
            </SideBarItem>

            <SideBarItem
              href={'/'}
              disabled
              isActive={router.pathname === '/Profile'}
            >
              <UserCircle size={22} />
              <span>Profile</span>
            </SideBarItem>
          </div>
          <Button>
            Upgrade PRO
            <SketchLogo size={32} />
          </Button>
        </SideBar>
        <Content css={{}}>{children}</Content>
      </Layout>
    </>
  );
};

export default DefaultLayout;

export const NavBar = styled('nav', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',

  width: '100%',
  backgroundColor: '$dark400',
  padding: '1rem 1.5rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
});

export const Layout = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',
});

export const SideBar = styled('div', {
  backgroundColor: '$dark600',
  padding: '1.5rem',
  width: '280px',
  height: 'calc(100vh - 60px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '.5rem',
});

export const SideBarItem = styled(Link, {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',
  padding: '.6rem',
  borderRadius: '6px',
  textDecoration: 'none',
  color: 'white',

  variants: {
    isActive: {
      true: {
        background: '$purple',
      },
    },
    disabled: {
      true: {
        opacity: '40%',
        cursor: 'not-allowed',
      },
    },
  },

  span: {
    fontWeight: '500',
    fontSize: '1rem',
  },
});

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  cursor: 'pointer',
  width: '100%',
  padding: '.8rem',
  borderRadius: '6px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: '500',
  fontSize: '1.2rem',
  border: 'none',
  background:
    'linear-gradient(90deg, rgba(250,0,255,1) 0%, rgba(0,108,255,1) 100%)',
});

export const Content = styled('main', {
  flex: '1',
  padding: '1.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 60px)',
  overflow: 'auto',
});
