import '../styles/globals.css';
import { DarkModeProvider } from '../hooks/useDarkMode';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
