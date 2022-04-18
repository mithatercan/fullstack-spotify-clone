import React from 'react';
import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
const Playlist = () => {
  const { query } = useRouter();

  const getBGColor = (id) => {
    const colors = [
      'red',
      'green',
      'blue',
      'orange',
      'purple',
      'gray',
      'teal',
      'yellow',
    ];

    return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Box
      width='calc(100vw - 250px)'
      minHeight='100vh'
      bg={getBGColor(query.id)}
    >
      Playlist {query.id}
    </Box>
  );
};

export default Playlist;
