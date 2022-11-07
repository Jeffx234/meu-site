import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

import { Box, Button, useColorModeValue, Grid } from '@chakra-ui/react'

export function IconName() {
  return (
    <Grid
      h="100%"
      gridGap="5"
      w="100%"
      templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }}
    >
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
    </Grid>
  )
}
