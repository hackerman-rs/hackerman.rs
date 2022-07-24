import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// be sure to add yourself here
const names = ["dean"];

const Home: NextPage = () => {
	const pages = names.map(name => <li key={name}><Link href={`/${name}`}>{name}</Link></li>);

	return (
		<main>
			<h1>ඞ</h1>

			<div>
				we are hackermans
			</div>

			<ul>
				{pages}
			</ul>

		</main>
	);
};

export default Home;
