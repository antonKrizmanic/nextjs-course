import Head from 'next/head';
import '../styles/globals.css'
import CustomLayout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NotificationContextProvider>
        <CustomLayout>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Component {...pageProps} />
        </CustomLayout>
      </NotificationContextProvider>
    </>
  );
}

export default MyApp
