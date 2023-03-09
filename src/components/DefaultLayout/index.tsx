import { styled } from '@/styles/stitches.config';
import { useRouter } from 'next/router';
import { Bell, Gear, House, List, UserCircle } from 'phosphor-react';
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
        <Bell size={28} weight="fill" />
      </NavBar>
      <Layout>
        <SideBar>
          <SideBarItem href={'/'} isActive={router.pathname === '/'}>
            <House size={28} />
            <span>Dashboard</span>
          </SideBarItem>

          <SideBarItem
            href={'/settings'}
            isActive={router.pathname === '/settings'}
          >
            <Gear size={28} />
            <span>Settings</span>
          </SideBarItem>

          <SideBarItem
            href={'/'}
            disabled
            isActive={router.pathname === '/Profile'}
          >
            <UserCircle size={28} />
            <span>Profile</span>
          </SideBarItem>
        </SideBar>
        <Content>{children}</Content>
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
  height: 'calc(100vh - 57px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});

export const SideBarItem = styled(Link, {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '1.5rem',
  padding: '.8rem',
  borderRadius: '6px',
  textDecoration: 'none',
  color: 'white',

  variants: {
    isActive: {
      true: {
        background:
          'linear-gradient(90deg, rgba(250,0,255,1) 0%, rgba(0,148,255,1) 100%)',
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
    fontSize: '1.2rem',
  },
});

export const Content = styled('main', {
  padding: '1.5rem',
});
