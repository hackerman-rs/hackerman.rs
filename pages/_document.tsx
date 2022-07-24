import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ServerStyleSheet} from "styled-components";

function DeanDocument() {
	return (
		<Html>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	);
}
DeanDocument.getInitialProps = async (ctx: DocumentContext): Promise<any> => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					sheet.collectStyles(<App {...props} />),
			})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: [initialProps.styles, sheet.getStyleElement()],
		}
	} finally {
		sheet.seal()
	}
}

export default DeanDocument;
