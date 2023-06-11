import { Box, Flex, Text, useColorModeValue, Icon } from '@chakra-ui/react'
import { FaBriefcase } from 'react-icons/fa'

export function Experience() {
  const experiences = [
    {
      company: 'BTG Pactual',
      position: 'IT Intern',
      duration: 'Janeiro 2023 - Presente',
      description:
        'Atuo como desenvolvedor front-end na criação de interfaces modernas utilizando Angular. Experiência em desenvolvimento de aplicações escaláveis e aplicação das melhores práticas de codificação. Conhecimento em microfrontends para criação de módulos independentes.',
    },

    {
      company: 'Health Mobile',
      position: 'Desenvolvedor Full Stack',
      duration: 'Abril 2022 - Janeiro 2023 (10 meses)',
      description:
        'Desenvolvimento de novas funcionalidades front-end utilizando ReactJS e bibliotecas como Styled Components, Redux e Redux Saga. Realização de testes unitários e de integração com Jest. Integrações com APIs utilizando REST e GraphQL. Criação de APIs com o framework Adonis e utilização de serviços da AWS como EC2, S3, Lambda, CloudFront, Route 53, RDS, SES e Kinesis.',
    },

    {
      company: 'FMX Soluções em Tecnologia',
      position: 'Estagiário de Desenvolvimento',
      duration: 'Janeiro 2022 - Abril 2022 (4 meses)',
      description:
        'Participação em programa de formação focado no uso da plataforma Genexus para o desenvolvimento ágil de aplicações empresariais. Treinamento em SQL Server e metodologias ágeis, com destaque para o SCRUM. Aplicação dos conhecimentos em projetos reais, contribuindo para o desenvolvimento de soluções empresariais.',
    },
  ]

  return (
    <Box id="experiencias" mt="10" p="10">
      <Text as="h2" fontSize="3xl" fontWeight="bold" mb="5">
        Experiências
      </Text>
      {experiences.map((experience, index) => (
        <Flex
          key={index}
          direction="column"
          mb="5"
          borderLeft="4px"
          borderLeftColor={'blue.500'}
          pl="4"
        >
          <Flex align="center">
            <Icon
              as={FaBriefcase}
              boxSize={6}
              color={useColorModeValue('gray.500', 'gray.300')}
              mr="2"
            />
            <Text fontWeight="bold" fontSize="xl">
              {experience.company}
            </Text>
          </Flex>
          <Text color={useColorModeValue('gray.500', 'gray.300')} mb="2">
            {experience.position}
          </Text>
          <Text color={useColorModeValue('gray.500', 'gray.300')} mb="2">
            {experience.duration}
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            {experience.description}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}
