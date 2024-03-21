import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes'
import 'react-loading-skeleton/dist/skeleton.css'


interface Props {
    href: string;
    children: ReactNode;
}

const Link = ({href, children} : Props) => {
  return (
    <div>
        <NextLink href={href} passHref legacyBehavior>
            <RadixLink>{children}</RadixLink>
        </NextLink>
    </div>
  )
}

export default Link