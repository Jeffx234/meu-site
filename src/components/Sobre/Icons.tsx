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
      templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
    >
      <Box borderRadius="full" h="100%" w="100%">
        <Button
          as="a"
          href="https://github.com/Jeffx234"
          rounded="full"
          bg="yellow.500"
          h="100%"
          color="white"
          _hover={{ bg: 'yellow.600' }}
        >
          <AiFillGithub
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
        </Button>
      </Box>

      <Box w="100%">
        <Button
          as="a"
          href="https://www.linkedin.com/in/jefersonluisx"
          rounded="full"
          h="60px"
          bg="blue.600"
          color="white"
          alignItems="center"
          _hover={{ bg: 'blue.700' }}
        >
          <AiFillLinkedin
            size={30}
            color={useColorModeValue('gray.200', 'gray.200')}
          />
        </Button>
      </Box>

      <Box w="100%">
        <Button
          as="a"
          href="https://www.instagram.com/jefersonluis91/"
          rounded="full"
          h="60px"
          bg="red.400"
          color="white"
          _hover={{ bg: 'red.500' }}
        >
          <AiOutlineInstagram size={30} />
        </Button>
      </Box>

      <Box>
        <Button
          as="a"
          href="https://api.whatsapp.com/send?phone=5521966591901"
          rounded="full"
          h="60px"
          target="_blank"
          color="white"
          bg="green.500"
          _hover={{ bg: 'green.600' }}
        >
          <AiOutlineWhatsApp size={30} />
        </Button>
      </Box>
    </Grid>
  )
}
