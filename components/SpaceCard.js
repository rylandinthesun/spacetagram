import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { RiEarthLine, RiEarthFill } from 'react-icons/ri';
import { useState } from 'react';

const SpaceCard = ({ pic, addFav, like, date, media_type, title, url, thumbnail_url, explanation }) => {
	return (
		<div className={styles.card}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				{media_type === 'video' ? (
					<Image
						src={thumbnail_url}
						alt={`Picture of ${title}`}
						width={400}
						height={400}
						objectFit="cover"
						priority
					/>
				) : (
					<Image src={url} alt={`Picture of ${title}`} width={400} height={400} objectFit="cover" priority />
				)}
			</a>
			<div className={styles.cardTitle}>
				<h4>{title}</h4>
				<div onClick={() => addFav(pic)}>{like ? <RiEarthFill /> : <RiEarthLine />}</div>
			</div>
			<p className={styles.explanation}>{explanation}</p>
			<div className={styles.date}>{date.split('-').join('/')}</div>
		</div>
	);
};

export default SpaceCard;
