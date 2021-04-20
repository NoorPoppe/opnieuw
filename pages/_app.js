import '../styles/globals.css'
import Layout from '../components/Layout'
import { ClayModalProvider } from '@clayui/modal';

function MyApp({ Component, pageProps }) {
  return (
    <ClayModalProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ClayModalProvider>
  )
}

export default MyApp
