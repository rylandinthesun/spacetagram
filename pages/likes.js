import Head from 'next/head';
import { useState, useEffect } from 'react';
import SpaceList from '../components/SpaceList';
import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Likes = () => {
	const [
		spaceFavs,
		setSpaceFavs
	] = useState([]);

	useEffect(() => {
		const favs = JSON.parse(localStorage.getItem('spacetagram-favs'));
		if (favs === null) {
			setSpaceFavs([]);
		}
		else {
			setSpaceFavs(favs);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('spacetagram-favs', JSON.stringify(items));
	};

	const removeFav = (item) => {
		const newFav = spaceFavs.filter((f) => f.title !== item.title && f.date !== item.date);

		setSpaceFavs(newFav);
		saveToLocalStorage(newFav);
	};

	const clearLikes = () => {
		localStorage.clear('spacetagram-favs');
		setSpaceFavs([]);
	};

	return (
		<div>
			<div className={styles.container}>
				<Head>
					<title>Your Likes</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						<span>Likes</span>
					</h1>

					{spaceFavs.length === 0 && (
						<p className={styles.description}>You haven&apos;t added any likes yet 🪐</p>
					)}

					<div className={styles.grid}>
						<SpaceList context={spaceFavs} handleRemove={removeFav} icon={<FaHeart />} />
					</div>
				</main>

				{spaceFavs.length >= 1 && (
					<button className={`${styles.likeBtn} ${styles.clearBtn}`} onClick={() => clearLikes()}>
						Clear All Likes
					</button>
				)}
			</div>
		</div>
	);
};

export default Likes;
