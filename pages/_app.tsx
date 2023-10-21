import Head from "next/head";
import "./globals.css";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import TimeAgo from 'javascript-time-ago'

type AppOwnProps = { example: string };


import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(en)

export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <>
      <Head>
        <title>Social Meida</title>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, example: "data" };
};
