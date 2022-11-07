import { Box, Flex, Heading } from '@chakra-ui/react'

export function Services() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      h="100%"
      w="100%"
      mt="8"
      p="8"
      id="servicos"
    >
      <Heading as="h2" fontSize="3xl" fontWeight="bold" textAlign="center">
        Serviços
      </Heading>

      <Box pt="16">
        <Box
          m="auto"
          px="4"
          className="container m-auto px-4 text-gray-500 md:px-12 xl:px-0"
        >
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="border border-slate-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-100">
                  Desenvolvimento de aplicações web
                </h3>

                <p className="mb-6">
                  Desenvolvimento de aplicações web para aplicações web , sites,
                  blogs etc...
                </p>
              </div>

              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
                className="w-2/3 ml-auto -mb-12"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>

            <div className="border border-slate-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-100">
                  Desenvolvimento de aplicações mobile
                </h3>

                <p className="mb-6">
                  Desenvolvimento de aplicações para dispositivos móveis etc...
                </p>
              </div>

              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>

            <div className="border border-slate-100 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-slate-100">
                  Design de interfaces
                </h3>

                <p className="mb-6">
                  Design de interfaces para aplicações web, sites, blogs etc...
                </p>
              </div>

              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </Box>
      </Box>
    </Flex>
  )
}
