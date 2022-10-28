import { Box, Flex, Text, useColorModeValue, Image } from '@chakra-ui/react'
import { IconName } from './Icons'

export function Sobre() {
  return (
    <Box
      id="sobre"
      mt="10"
      justifyContent="center"
      alignItems="center"
      p="10"
      h="auto"
    >
      <Flex justifyContent="space-between" alignItems="center" h="100%">
        <Box w="400px" h="100%" borderRadius="5px">
          <Image
            src="/images/profile.jpg"
            alt="Foto jeferson"
            w="100%"
            borderRadius="5px"
          />
        </Box>
        <Flex w="60%" textAlign="center" h="100%" flexDirection="column">
          <Text
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            color={useColorModeValue('gray.700', 'gray.200')}
            textAlign="center"
            mb="10"
          >
            Sobre mim
          </Text>
          <Text color="gray.500" fontSize="md" mb="5">
            {' '}
            Rio de Janeiro, Brasil
          </Text>
          <Text color="gray.500" fontSize="md" lineHeight="1.5" mb="20">
            Meu nome é Jeferson Luis, tenho 27 anos e sou um desenvolvedor
            front-end. Estou cursando Análise e desenvolvimento de sistemas na
            Universidade Estácio de Sá. Atualmente estou trabalhando como
            desenvolvedor front-end na Healh mobile. Apaixonado por tecnologia e
            por desenvolver soluções que possam ajudar a vida das pessoas.
          </Text>
          <IconName />
        </Flex>
      </Flex>
    </Box>
  )
}
