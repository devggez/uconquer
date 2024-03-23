'use client';

import { Skeleton } from '@/app/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBug } from "react-icons/fa"
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Avatar, Box, Container, DropdownMenu, DropdownMenuContent, Flex, Text } from '@radix-ui/themes';


const NavBar = () => {


  return (
    <nav className='border-b mb-5 px-8 py-5 justify-between'>
      <Container>
        <Flex align="center" gap='5' justify='between'>
          <Link className='' href={'/'}> <FaBug /> </Link>

          <NavLinks></NavLinks>
          <AuthStatus></AuthStatus>
        </Flex>

      </Container>
    </nav>
  )
}

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' }
  ]

  return (
    <ul className='flex space-x-6'>
      {links.map(link =>
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link" : true,
              '!text-zinc-900': link.href === currentPath
            })}
            href={link.href}>{link.label}</Link></li>)}
    </ul>
  );
}


const AuthStatus = () => {

  const { status, data: session } = useSession()

  if (status === "loading") return <Skeleton width='3rem'/>;

  if (status === "unauthenticated") return <Link href='/api/auth/signin' className='nav-link'>Sign In</Link>;


  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            radius="full"
            className='cursor-pointer'
            size='3'></Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size='3'>{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href='/api/auth/signout'>Log Out</Link>

          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box >
  )
};

export default NavBar