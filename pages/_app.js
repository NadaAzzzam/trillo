import Layouts from '../components/layout/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} /> 
    </Layouts>
   )
}

export default MyApp
