import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { Lexend } from "next/font/google";
import Head from "next/head";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lexend.variable}>
      <Head>
        <title>Waste Management</title>
        <meta name="description" content="Default description for Waste Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
