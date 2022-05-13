import '../styles/globals.css'
import CustomLayout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}

export default MyApp
