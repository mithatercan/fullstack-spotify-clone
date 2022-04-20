import { Box, Flex, Center, Input, Button, Grid } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useSWRConfig } from 'swr';
import { auth } from '../../lib/mutations';

import Image from 'next/image';
import AuthForm from './AuthForm';

const AuthLayout: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  return (
    <Box height='100vh' width='100vw' bg='black' color='white'>
      <Flex
        gap='30px'
        direction='column'
        justify='center'
        align='center'
        height='100vh'
      >
        <Center>
          <Image src='/logo.png' height='90px' width='280px' />
        </Center>
        <AuthForm mode={mode} />
        <Box>
          Email : user@test.com <br /> Password : password
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthLayout;
