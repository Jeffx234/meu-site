import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export function Projetos() {
  const cards = [
    {
      image: './images/dtmoney.gif',
    },
    {
      image: './images/goRestaurant.png',
    },

    {
      image: './images/dtmoney.gif',
    },
    {
      image: './images/goRestaurant.png',
    },
    {
      image: './images/ignews.png',
    },
  ]

  return (
    <Box
      id="projetos"
      position={'relative'}
      height={'auto'}
      width={'full'}
      overflow={'hidden'}
      mt={20}
      p={10}
    >
      <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} mb={4}>
        Projetos
      </Text>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'300px'}
            display={'flex'}
            alignItems={'center'}
          >
            <Box
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              position="relative"
              backgroundSize="cover"
              margin="5px"
              border="1px solid #e2e8f0"
              borderRadius="5px"
              backgroundImage={`url(${card.image})`}
              height={'100%'}
            ></Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
