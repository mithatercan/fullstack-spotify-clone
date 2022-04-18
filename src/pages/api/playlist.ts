import prisma from '../../../lib/prisma';

export default async function playlist(req, res) {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: 1,
    },
    orderBy: {
      name: 'asc',
    },
  });
  res.json(playlists);
}
