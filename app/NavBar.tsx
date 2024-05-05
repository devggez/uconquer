"use client";

import { Skeleton } from "@/app/components";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/logo.png";

const NavBar = () => {
  return (
    <nav className="border-b border-orange-400 mb-5 px-8 py-5 justify-between">
      <Container>
        <Flex align="center" gap="5" justify="between">
          <Link className="" href={"/"}>
            <Image
              src={logo}
              width={65}
              height={65}
              alt="Picture of the author"
            />
          </Link>

          <NavLinks></NavLinks>
          <AuthStatus></AuthStatus>
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Contest", href: "/contest" },
    { label: "Problems", href: "/issues/list" },
    { label: "Documentation", href: "/documentation" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              "!text-orange-400": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading")
    return <Skeleton width="3rem" height="3rem" borderRadius="full" />;

  if (status === "unauthenticated")
    return (
      <Link href="/api/auth/signin" className="nav-link">
        Sign In
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            radius="full"
            className="cursor-pointer"
            size="3"
          ></Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="3">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/options">Settings</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
