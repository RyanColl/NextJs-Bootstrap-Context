import AppContext from '../context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    )
}

export default MyApp
