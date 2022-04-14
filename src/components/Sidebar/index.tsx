/* eslint-disable react/self-closing-comp */
import NextImage from 'next/image';
import { Box, Divider } from '@chakra-ui/layout';
import { navMenu, musicMenu } from './menus';
import Playlists from './Playlists';
import MenuList from './MenuList';

const Sidebar = () => {
  return (
    <Box
      width='100%'
      height='calc(100vh - 100px)'
      bg='black'
      paddingX='5px'
      color='gray'
      overflow='hidden'
    >
      <Box paddingY='20px' height='100%'>
        <Box width='100%' paddingX='20px' marginBottom='20px'>
          <NextImage src='/logo.png' height='50px' width='160px' />
        </Box>
        <Box marginBottom='20px' height='auto'>
          <MenuList menu={navMenu} />
        </Box>
        <Box marginTop='20px' height='auto'>
          <MenuList menu={musicMenu} />
        </Box>
        <Divider marginY='20px' color='gray.900' />
        <Box height='45%' overflowY='auto' paddingY='20px'>
          <Playlists />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
