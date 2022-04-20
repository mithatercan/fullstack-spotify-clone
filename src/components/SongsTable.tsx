// @refresh reset
import { Box } from '@chakra-ui/layout';
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/table';
import { IconButton } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { formatDate, formatTime } from '../../lib/formatter';
import { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

const SongsTable = ({ songs }) => {
  const { setActiveSongs, setActiveSong } = useContext(SongContext);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0]);
  };

  const handlePlayAll = () => {
    setActiveSongs(songs);
  };

  return (
    <Box bg='transparent'>
      <Box padding='10px' marginBottom='20px'>
        <IconButton
          onClick={() => handlePlayAll()}
          colorScheme='green'
          size='lg'
          aria-label='Play'
          borderRadius='50%'
          icon={<BsFillPlayFill fontSize='30px' />}
          marginBottom='30px'
        />
        <Table variant='unstyled'>
          <Thead borderBottom='1px solid' borderColor='rgba(255,255,255,0.2)'>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, idx) => (
              <Tr
                onClick={() => handlePlay(song)}
                key={song.id}
                sx={{
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    bg: 'rgba(255,255,255,0.1)',
                  },
                }}
                cursor='pointer'
              >
                <Td>{idx + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{formatDate(song.createdAt)}</Td>
                <Td>{formatTime(song.duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongsTable;
