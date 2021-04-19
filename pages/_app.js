import Layout from '../components/Layout'
import '../styles/globals.css'
import { ClayModalProvider } from '@clayui/modal';
import "@clayui/css/lib/css/atlas.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClayModalProvider >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ClayModalProvider >
    )
}

export default MyApp
