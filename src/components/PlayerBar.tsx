// @refresh reset
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import Player from './Player';
import { useContext, useEffect } from 'react';
import { SongContext } from '../contexts/SongContext';

const PlayerBar = () => {
  const context = useContext(SongContext);
  const { activeSong, activeSongs } = context;

  useEffect(() => {
    console.log('activeSongs', activeSongs);
    console.log('activeSong', activeSong);
  }, [activeSong, activeSongs]);
  return (
    <Box height='100%' width='100vw' bg='gray.900'>
      <Flex height='100%' width='100vw' align='center' justify='center'>
        <Flex gap='20px' padding='20px' color='white' flex='1'>
          {activeSong ? (
            <>
              <Image
                boxSize='60px'
                boxShadow='2xl'
                src={`https://picsum.photos/100?random=${activeSong.id}`}
                borderRadius='3px'
              />
              <Box>
                <Text fontSize='lg'>{activeSong.name}</Text>
                <Text fontSize='sm'>{activeSong.artist.name}</Text>
              </Box>
            </>
          ) : null}
        </Flex>

        <Box flex='1.5'>
          <Player activeSongs={activeSongs} activeSong={activeSong} />
        </Box>
        <Box flex='1'></Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
