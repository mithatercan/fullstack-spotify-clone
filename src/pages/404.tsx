import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
};

export default getStaticProps;
