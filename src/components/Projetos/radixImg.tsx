import React from 'react';
import { styled } from '@stitches/react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
const BoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
    transform: 'scale(1.05)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    zIndex: 1,
    '&:hover': {
      opacity: 1,
    },
  },
  
})

const Box = styled('div', {
});
const Img = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

interface PropsImg {
  img: string;
  alt?: string;
  title?: string;
  descricao?: string;
  tecnologia?: string;
}

export const AspectRatioDemo = ({ img, alt,title,descricao, tecnologia }: PropsImg) => (
  <BoxContainer>
    <Box
    css={{
      borderRadius: 6,
      overflow: 'hidden',    
    }}
    >
    <AspectRatio.Root ratio={16 / 9}>
      <Img
        src={img}
        alt={alt}
      />
    </AspectRatio.Root>
    </Box>
  </BoxContainer>
);

