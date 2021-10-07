import type { AppProps } from 'next/app';

import { CssBaseline } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
