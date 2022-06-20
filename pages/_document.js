/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
import { Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      // ...
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[Tracking ID]', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
    );
  }
}
