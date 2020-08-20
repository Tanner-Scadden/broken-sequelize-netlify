import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Example</title>
        <link rel="canonical" href="https://trash-junk-away.netlify.app/" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
