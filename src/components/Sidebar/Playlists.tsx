import usePlaylist from '../../hooks/usePlaylist';
import MenuList from './MenuList';

const Playlists = () => {
  const { isLoading, playlists, isError } = usePlaylist();

  return isLoading || isError ? (
    <div>Loading...</div>
  ) : (
    <MenuList menu={playlists} />
  );
};

export default Playlists;
