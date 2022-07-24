import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>hackermans &#x01F60E;</title>
			<link rel="icon" href="/hackermans.png" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
