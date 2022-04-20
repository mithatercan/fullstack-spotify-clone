import { Input, Button, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { auth } from '../../lib/mutations';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('test');
  const [lastName, setLastName] = useState('test');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = await auth(mode, { firstName, lastName, email, password });
    if (user) {
      setIsLoading(false);
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        gap='20px'
        padding='50px 30px'
        bg='gray.900'
        borderRadius='5px'
        sx={{
          input: {
            width: '300px',
            borderColor: 'gray.500',
          },
        }}
      >
        <Input
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          _hover={{
            bg: 'green.100',
            color: 'green.500',
          }}
          width='100%'
          type='submit'
          bg='green.500'
          isLoading={isLoading}
        >
          {mode}
        </Button>
      </Grid>
    </form>
  );
};

export default AuthForm;
