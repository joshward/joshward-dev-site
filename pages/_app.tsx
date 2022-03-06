import '@fontsource/jetbrains-mono'
import 'tailwindcss/tailwind.css'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import BaseLayout from '../components/BaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="joshward.dev">
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </PlausibleProvider>
  )
}

export default MyApp
