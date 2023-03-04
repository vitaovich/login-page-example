import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='no-referrer-when-downgrade' content='origin' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
