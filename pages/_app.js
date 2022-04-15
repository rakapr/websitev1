import Layout from "../components/Layout/Layout";
import "../styles/custom.css";
// import "../styles/globals.css";
// import "../styles/new.css";
import { Provider } from "react-redux";
import store from '../redux/store';           // Importing redux store
import { ToastContainer, Slide } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';



import 'react-toastify/dist/ReactToastify.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
        className="impct-toast"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
        transition={Slide}
      />
      </Layout>
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
