import { Icon, Link as  ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType
    children: string
    href: string
}

export function NavLink({icon, children,href, ...rest}: NavLinkProps){
    return (
      <ActiveLink href={href} passHref legacyBehavior>
        <ChakraLink {...rest} display="flex" alignItems={"center"} color="pink.400">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
      </ActiveLink>
    )
}