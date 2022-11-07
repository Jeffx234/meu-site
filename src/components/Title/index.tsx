import { AiFillLinkedin } from 'react-icons/ai'

import { BiDownload } from 'react-icons/bi'

import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

export function Title() {
  return (
    <Flex
      id="contact"
      mt="10"
      justifyContent="center"
      alignItems="center"
      p="10"
    >
      <Flex
        flexDirection="column"
        maxW={{ base: '500px', md: '700px', lg: '900px' }}
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Box>
          <Heading
            mb="5"
            fontSize="5xl"
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <span>Jeferson Luis</span>
          </Heading>
        </Box>

        <Text
          fontSize="2xl"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontWeight="bold"
        >
          Desenvolvedor Front-end{' '}
          <Text as="span" color="blue.500" fontWeight="bold">
            {' '}
            Health mobile{' '}
          </Text>
        </Text>

        <Box mt="3">
          <Text color="gray.500" fontSize="md">
            Meu nome é Jeferson Luis, sou um desenvolvedor front-end e
            desenvolvo soluções para aplicações web e mobile.
          </Text>
        </Box>

        <Flex mt="5" gridGap="5">
          <Button
            as="a"
            href="/JefersonLuisSantana.pdf"
            className="icons"
            download
            bg="transparent"
            border="2px"
            _hover={{ bg: 'blue.500', color: 'white' }}
            borderColor="blue.500"
            borderRadius="5px"
            px="6"
            display="flex"
            alignItems="center"
            gridGap="2"
            textDecoration="none"
          >
            Download CV
            <BiDownload size="20" />
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/jefersonluisx/"
            target="_blank"
            className="icons"
            download
            bg="transparent"
            border="2px"
            _hover={{ bg: 'blue.500', color: 'white' }}
            borderColor="blue.500"
            borderRadius="5px"
            px="6"
            display="flex"
            alignItems="center"
            gridGap="2"
            textDecoration="none"
          >
            Linkedin
            <AiFillLinkedin size="20" />
          </Button>
        </Flex>
      </Flex>

      <Box ml="10" display={{ base: 'none', md: 'block' }}>
        <Image src="/images/logger.png" alt="Foto logo" />
      </Box>
    </Flex>
  )
}
