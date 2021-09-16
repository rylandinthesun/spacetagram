import Image from 'next/image';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import styles from '../styles/Home.module.css';

const SpaceCard = ({
	date,
	media_type,
	title,
	url,
	thumbnail_url,
	explanation,
	context,
	handleAdd,
	handleRemove,
	liked
}) => {
	const [
		showDesc,
		setShowDesc
	] = useState(false);

	return (
		<div className={styles.card}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				{media_type === 'video' ? (
					<Image
						src={
							thumbnail_url ||
							'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
						}
						alt={`Picture of ${title}`}
						width={400}
						height={400}
						objectFit="cover"
						quality={50}
					/>
				) : (
					<Image
						src={url || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
						alt={`Picture of ${title}`}
						width={400}
						height={400}
						objectFit="cover"
						quality={50}
					/>
				)}
			</a>
			<div className={styles.cardTitle}>
				<h4>
					{title}
					<div className={styles.date}>
						Taken on: <span>{date.split('-').join('/')}</span>
					</div>
				</h4>

				{liked ? (
					<div onClick={() => handleRemove(context)}>
						<FaHeart />
					</div>
				) : (
					<div onClick={() => handleAdd(context)}>
						<FiHeart />
					</div>
				)}
			</div>
			<button className={styles.showExpBtn} onClick={() => setShowDesc(!showDesc)}>
				{showDesc ? 'Close Explanation' : 'Show Explanation'}
			</button>
			{showDesc && <p className={styles.explanation}>{explanation}</p>}
		</div>
	);
};

export default SpaceCard;
