import prisma from '../../lib/prisma';
import { Box, Flex, Text } from '@chakra-ui/layout';
import GradientLayout from '../components/GradientLayout';
import useMe from '../hooks/useMe';
import { Image } from '@chakra-ui/react';

const Home = ({ artists }) => {
  const { user, isLoading } = useMe();

  return (
    <GradientLayout
      color='purple'
      roundedImage={true}
      image='https://i.pravatar.cc/200'
      title={!isLoading && `${user?.firstName} ${user?.lastName}`}
      subtitle='profile'
      description={!isLoading && `${user?.playlistsCount} public playlists`}
    >
      <Box color='white' paddingX='40px'>
        <Box>
          <Text fontSize='2xl' fontWeight='bold'>
            Top artists this month
          </Text>
          <Text fontSize='x-small'>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box key={artist.id} padding='10px 10px 0 0' width='20%'>
              <Box bg='gray.900' borderRadius='4px' padding='15px' width='100%'>
                <Image
                  src={`https://picsum.photos/200?random=${artist.id}`}
                  borderRadius='50%'
                />
                <Box marginTop='10px'>
                  <Text fontSize='large'>{artist.name}</Text>
                  <Text fontSize='xs'>artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: {
      artists,
    },
  };
};
