/* eslint-disable prettier/prettier */
import { Box } from '@chakra-ui/layout';
import Sidebar from './Sidebar';

const PlayerLayout = ({ children }) => {
  return (
    <Box width='100vw' height='100vh'>
      <Box position='absolute' top='0' left='0' width='250px'>
        <Sidebar />
      </Box>
      <Box marginLeft='250px' marginBottom='100px'>
        <Box height='calc(100vh - 100px)'>{children}</Box>
      </Box>
      <Box
        bg='gray.900'
        height='100px'
        right='0'
        position='absolute'
        bottom='0'
        left='0'
      ></Box>
    </Box>
  );
};

export default PlayerLayout;
