import type { NextPage } from 'next';
import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components';

const Page = styled.div`
	min-height: 100vh;
	padding-top: 50px;

	font-size: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const animatedBg = keyframes`
	0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 200% 0%;
	}
`;

const Amogus = styled.h1`
	margin-top: 0;
	margin-bottom: 0;
	color: transparent;
	animation: ${animatedBg} 1s linear infinite;
	background-image: linear-gradient(
		90deg,
		rgba(255, 0, 0, 1) 0%,
		rgba(255, 154, 0, 1) 10%,
		rgba(208, 222, 33, 1) 20%,
		rgba(79, 220, 74, 1) 30%,
		rgba(63, 218, 216, 1) 40%,
		rgba(47, 201, 226, 1) 50%,
		rgba(28, 127, 238, 1) 60%,
		rgba(95, 21, 242, 1) 70%,
		rgba(186, 12, 248, 1) 80%,
		rgba(251, 7, 217, 1) 90%,
		rgba(255, 0, 0, 1) 100%
	);
	background-position: 0 0;
	background-size: 200% 200%;
	background-clip: text;
	-webkit-background-clip: text;
`;

const Subtitle = styled.h3`
	margin-top: 5px;
	margin-bottom: 25px;
`;

const Footer = styled.footer`
	font-size: 0.75em;
	height: 50px;
	text-align: center;
`;

const FooterLink = styled.a`
	color: #ffffff;
	text-decoration: underline;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Li = styled.li`
	display: block;
`;

const Link = styled.a`
	color: #ef4444;
	text-decoration: underline wavy;
`;

// be sure to add yourself here
const people = [{
	name: "dean",
	color: "#ef7d0d",
	website: "https://dbassett.dev/"
}, {
	name: "penple",
	color: "#a855f7",
	website: "https://penple.dev/"
}, {
	name: "violet",
	color: "#ffaaff",
	website: "https://viomck.com/"
}, {
	name: "pato",
	color: "#38fedc",
	website: "https://pato.gay/"
}, {
	name: "aberdeener",
	color: "#000000",
	website: "https://bentley.pictures/"
}];

const Home: NextPage = () => {
	const pages = people.map(p => (
		<Li key={p.name}>
			<NextLink href={p.website} passHref>
				<Link style={{ color: p.color }}>{p.name}</Link>
			</NextLink>
		</Li>
	));

	return (
		<Page>
			<Main>
				{/* eslint-disable-next-line react/jsx-no-target-blank */}
				<a
					target="_blank"
					style={{ textDecoration: 'none' }}
					href="https://twitter.com/unicode/status/1551714029436936192"
					rel="noopener"
				>
					<Amogus>ඞ</Amogus>
				</a>

				<Subtitle>
					we are hackermans
				</Subtitle>

				<Ul role="list">
					{pages}
				</Ul>

			</Main>
			<Footer>
				sussy code at{' '}
				<NextLink href="https://github.com/hackerman-rs/hackerman.rs" passHref>
					<FooterLink>github</FooterLink>
				</NextLink>
			</Footer>
		</Page>
	);
};

export default Home;
