import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          siteName: "SiteName"
        }}
        titleTemplate='Graphs | %s'
      />
      <Component {...pageProps} />
    </>
  );
}
