import useSWR from 'swr';
import fetcher from '../../lib/fetcher';

const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePlaylist;
