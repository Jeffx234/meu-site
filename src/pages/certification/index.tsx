import { Box, Grid, Text, Image } from '@chakra-ui/react'

export default function Certification() {
  return (
    <Box p="10" id="certification">
      <Text fontSize="3xl" fontWeight="bold" mb="5" textAlign="center">
        Certificações
      </Text>

      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="5">
        <Box>
          <Image src="/cert/Ignite.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            React, Nextjs, Chakra-ui, TypeScript, Javascript, HTML, CSS, Styled
            Components, Redux, Context API, React-hooks.
          </Text>
        </Box>

        <Box>
          <Image src="/cert/Edduz.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components, Redux, Context API, React-hooks.
          </Text>
        </Box>

        <Box>
          <Image src="/cert/inter.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS.
          </Text>
        </Box>

        <Box>
          <Image src="/cert/mrv.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            React, TypeScript, Javascript, HTML, CSS, Styled Components, .NET,
            #C, Sql server
          </Text>
        </Box>

        <Box>
          <Image src="/cert/takblip.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            React, React Native, NodeJs, Express, TypeScript, Javascript, HTML,
            CSS, Styled Components,
          </Text>
        </Box>

        <Box>
          <Image src="/cert/decolatech.jpg" alt="Certificados bootcamp Edduz" />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            .NET, #C, Sql server, C#, Javascript, HTML, CSS
          </Text>
        </Box>

        <Box>
          <Image
            src="/cert/freecodecamp.jpg"
            alt="Certificados bootcamp Edduz"
          />
          <Text fontSize="md" fontWeight="bold">
            Linguagens usadas
          </Text>
          <Text fontSize="sm" color="gray.500" mt="2">
            .Javascript básico ao avançado
          </Text>
        </Box>
      </Grid>
    </Box>
  )
}
