import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundedImage,
}) => {
  return (
    <Box
      color='white'
      height='100%'
      overflowY='auto'
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding='40px' align='end'>
        <Box padding='20px'>
          <Image
            boxSize='160px'
            boxShadow='2xl'
            src={image}
            borderRadius={roundedImage ? '50%' : '3px'}
          />
        </Box>
        <Box padding='20px' lineHeight='40px'>
          <Text fontSize='x-small' fontWeight='bold' casing='uppercase'>
            {subtitle}
          </Text>
          <Text fontSize='6xl'>{title}</Text>
          <Text fontSize='x-small' fontWeight='100px'>
            {description}
          </Text>
        </Box>
      </Flex>
      <Box padding='30px'>{children}</Box>
    </Box>
  );
};

export default GradientLayout;
