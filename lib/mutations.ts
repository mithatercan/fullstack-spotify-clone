import fetcher from './fetcher'

export const auth = (
  mode: 'signin' | 'signup',
  body: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
) => {
  return fetcher(`/${mode}`, body)
}
