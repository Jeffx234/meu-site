import { Box, Flex, Text, useColorModeValue, Icon } from '@chakra-ui/react'
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiJava,
  DiAws,
  DiDocker,
} from 'react-icons/di'
import { SiTypescript, SiAngular, SiNextDotJs } from 'react-icons/si'

export function Skills() {
  const skills = [
    { name: 'JavaScript', icon: DiJavascript1, color: '#F0DB4F' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: DiReact, color: '#61DAFB' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Node.js', icon: DiNodejsSmall, color: '#68A063' },
    { name: 'Java', icon: DiJava, color: '#007396' },
    { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
    { name: 'AWS', icon: DiAws, color: '#FF9900' },
    { name: 'Docker', icon: DiDocker, color: '#2496ED' },
  ]

  return (
    <Box id="skills" mt="10" p="10">
      <Text as="h2" fontSize="3xl" fontWeight="bold" mb="5">
        Habilidades
      </Text>
      <Flex flexWrap="wrap" gridGap={4}>
        {skills.map((skill) => (
          <Box
            key={skill.name}
            p="3"
            bg={useColorModeValue('gray.100', 'gray.800')}
            borderRadius="5px"
            display="flex"
            alignItems="center"
            fontSize="xl"
          >
            <Icon as={skill.icon} mr="2" color={skill.color} />
            <Text fontWeight="bold">{skill.name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
