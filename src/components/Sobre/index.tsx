import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { IconName } from './Icons'

export function Sobre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Flex borderRadius="md" mt={16} alignItems="center">
      <Flex
        borderRadius="md"
        w="100%"
        p={4}
        m={4}
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="flex-start"
      >
        <Image
          src="./images/profile.jpg"
          alt="Profile Image"
          borderRadius="md"
          boxSize="150px"
          m="0 auto"
          w={['100%', '100%', '30%']}
          h="100%"
          border="2px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          objectFit="contain"
          objectPosition="center"
          boxShadow="md"
          mr={4}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

        <Box
          textAlign="left"
          w={['100%', '100%', '70%']}
          ml={[0, 0, 4]}
          mt={[isMobile ? 4 : 0, isMobile ? 4 : 0, 0]}
          borderLeft={isMobile ? 'none' : '2px solid'}
          borderColor={isMobile ? 'none' : 'blue.500'}
          mt={isMobile && 4}
        >
          <Box
            p={4}
            h={['auto', 'auto', '85%']}
            borderRadius="md"
            ml={[0, 0, 16]}
          >
            <Text fontSize="2xl" fontWeight="bold" mt={4}>
              Sobre Mim
            </Text>

            <Text fontSize="md" mt={2}>
              Olá, eu sou Jeferson Luis, um desenvolvedor front-end apaixonado
              por tecnologia e determinado em criar soluções inovadoras que
              aprimorem a vida das pessoas. Com 28 anos de idade, estou
              atualmente cursando Análise e Desenvolvimento de Sistemas na
              Universidade Estácio de Sá, onde tenho a oportunidade de aprimorar
              minhas habilidades técnicas. Minha paixão pela tecnologia começou
              cedo e cresceu ao longo dos anos, impulsionada pela minha
              curiosidade incessante em explorar novas tendências e ferramentas
              no campo do desenvolvimento front-end. Acredito firmemente no lema
              "Um dia sem superação, é um dia perdido", o que me motiva a
              enfrentar desafios e buscar constantemente maneiras de aprimorar
              minhas habilidades e conhecimentos técnicos. Estou sempre buscando
              aprender novas tecnologias e tendências emergentes no campo do
              desenvolvimento front-end, para que eu possa aplicar as melhores
              práticas e oferecer soluções inovadoras aos meus projetos. Sou
              adepto de abordagens ágeis e colaborativas, e estou constantemente
              buscando maneiras de otimizar os processos de desenvolvimento e
              aumentar a eficiência.
            </Text>
          </Box>
          <Box h={['auto', 'auto', '15%']} mt={4}>
            <IconName />
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
