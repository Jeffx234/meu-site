import { ReactNode } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface HeaderProps {
  children?: ReactNode
  href?: string
}

const NavLink = ({ children, href }: HeaderProps) => (
  <Link
    px={2}
    py={1}
    width="100%"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    rounded={'md'}
    transition="all 0.3s"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    href={href}
  >
    {children}
  </Link>
)

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Portifólio Jeferson Luis</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <GiHamburgerMenu size={30} />
                </MenuButton>
                <MenuList
                  alignItems={'center'}
                  display={'flex'}
                  flexDirection={'column'}
                  gridGap={2}
                >
                  <NavLink>Certificados</NavLink>
                  <NavLink>Experiências</NavLink>
                  <NavLink>Projetos</NavLink>
                  <NavLink>Contato</NavLink>
                  <NavLink>Sobre</NavLink>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
