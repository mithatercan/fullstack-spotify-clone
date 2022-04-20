import React from 'react';
import prisma from '../../../lib/prisma';
import GradientLayout from '../../components/GradientLayout';
import { validateToken } from '../../../lib/auth';
import SongsTable from '../../components/SongsTable';

const Playlist = ({ playlist }) => {
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
    <GradientLayout
      color={getBGColor(playlist.id)}
      roundedImage={false}
      title={playlist.name}
      subtitle='Playlist'
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export default Playlist;

export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN);
  } catch (error) {
    return {
      redirect: {
        destination: '/signin',
        permanent: true,
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      playlist,
    },
  };
};
