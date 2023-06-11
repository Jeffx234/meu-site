import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { Box, useColorModeValue } from '@chakra-ui/react'

export function IconName() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gridGap="2">
      <Box m={2} backgroundColor="yellow.500" borderRadius="50%" p={2}>
        <a
          href="https://github.com/Jeffx234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={24} color="yellow.500" />
        </a>
      </Box>

      <Box m={2} backgroundColor="blue.600" borderRadius="50%" p={2}>
        <a
          href="https://www.linkedin.com/in/jefersonluisx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={24} color="blue.600" />
        </a>
      </Box>

      <Box m={2} backgroundColor="red.400" borderRadius="50%" p={2}>
        <a
          href="https://www.instagram.com/jefersonluis91/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={24} color="red.400" />
        </a>
      </Box>

      <Box m={2} backgroundColor="green.500" borderRadius="50%" p={2}>
        <a
          href="https://api.whatsapp.com/send?phone=5521966591901"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp size={24} color="green.500" />
        </a>
      </Box>
    </Box>
  )
}
