import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)

  return {
    user: data as any,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useMe
