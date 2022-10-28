import Link from 'next/link'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { Icon } from './styles'
import { Flex, Text, Box, Button, useColorModeValue } from '@chakra-ui/react'

export function IconName() {
  return (
    <Flex gridGap="5" mt="auto" justifyContent="space-around" h="100%">
      <Box>
        <Button
          as="a"
          href="https://github.com/Jeffx234"
          rounded="full"
          h="60px"
          display="flex"
          bg="transparent"
          flexDir="column"
          alignItems="center"
          _hover={{
            bg: 'blue.500',
            color: `${useColorModeValue('white', '')}`,
          }}
        >
          <AiFillGithub
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
          Github
        </Button>
      </Box>

      <Box>
        <Button
          as="a"
          href="https://www.linkedin.com/in/jefersonluisx"
          rounded="full"
          h="60px"
          display="flex"
          bg="transparent"
          flexDir="column"
          alignItems="center"
          _hover={{
            bg: 'blue.500',
            color: `${useColorModeValue('white', '')}`,
          }}
        >
          <AiFillLinkedin
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
          Linkedin
        </Button>
      </Box>

      <Box>
        <Button
          as="a"
          href="https://www.instagram.com/jefersonluis91/"
          rounded="full"
          h="60px"
          display="flex"
          bg="transparent"
          flexDir="column"
          alignItems="center"
          _hover={{
            bg: 'blue.500',
            color: `${useColorModeValue('white', '')}`,
          }}
        >
          <AiOutlineInstagram
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
          Instagram
        </Button>
      </Box>

      <Box>
        <Button
          as="a"
          href="https://api.whatsapp.com/send?phone=5521966591901"
          rounded="full"
          h="60px"
          display="flex"
          bg="transparent"
          flexDir="column"
          alignItems="center"
          target="_blank"
          _hover={{
            bg: 'blue.500',
            color: `${useColorModeValue('white', '')}`,
          }}
        >
          <AiOutlineWhatsApp
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
          Whatszap
        </Button>
      </Box>

      <Box>
        <Button
          as="a"
          href="https://github.com/Jeffx234"
          rounded="full"
          h="60px"
          display="flex"
          bg="transparent"
          flexDir="column"
          alignItems="center"
          _hover={{
            bg: 'blue.500',
            color: `${useColorModeValue('white', '')}`,
          }}
        >
          <AiFillGithub
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
          Github
        </Button>
      </Box>
    </Flex>
  )
}
