import Head from 'next/head';
import '../styles/globals.css'
import CustomLayout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomLayout>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp
