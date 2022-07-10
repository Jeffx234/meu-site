import React from 'react';
import { styled } from '@stitches/react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
const BoxContainer = styled('div', {
  width: '800px',

})

const Box = styled('div', {
  width: '85%',
  marginTop: '5rem'
});
const Img = styled('img', {
  objectFit: 'cover',
  width: '70%',
  height: '70%'
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
      marginBottom: '20px',
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

