import { Box, Grid, Text, Image } from '@chakra-ui/react'

export default function Certification() {
  return (
    <Box p="10" id="certification">
      <Text fontSize="3xl" fontWeight="bold" mb="5" textAlign="center">
        Certificações
      </Text>

      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="5">
        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/cert/Ignite.jpg"
            alt="Certificados bootcamp Edduz"
            maxH="300px"
          />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            React, Nextjs, Chakra-ui, TypeScript, Javascript, HTML, CSS, Styled
            Components, Redux, Context API, React-hooks.
          </Text>
        </Box>
        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/cert/Edduz.jpg"
            alt="Certificados bootcamp Edduz"
            maxH="300px"
          />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components, Redux, Context API, React-hooks.
          </Text>
        </Box>
        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image src="/cert/inter.jpg" alt="Certificados Inter" />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS.
          </Text>
        </Box>
        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image src="/cert/mrv.jpg" alt="Certificados bootcamp MRV" />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            React, TypeScript, Javascript, HTML, CSS, Styled Components, .NET,
            #C, Sql server
          </Text>
        </Box>

        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/cert/takblip.jpg"
            alt="Certificados bootcamp Takblip"
            maxH="300px"
          />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components,
          </Text>
        </Box>

        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/cert/decolatech.jpg"
            alt="Certificados bootcamp DecolaTech"
            maxH="300px"
          />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            .NET, #C, Sql server, C#, Javascript, HTML, CSS
          </Text>
        </Box>

        <Box
          bg="gray.700"
          borderRadius="md"
          p="4"
          display="flex"
          width="%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/cert/freecodecamp.jpg"
            alt="Certificados Freecodecamp"
            maxH="300px"
          />
          <Text fontSize="md" fontWeight="bold" mt="4">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2" textAlign="center">
            Javascript básico ao avançado
          </Text>
        </Box>
      </Grid>
    </Box>
  )
}
