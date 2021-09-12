import Image from 'next/image';
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
				<h4>{title}</h4>
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
			<p className={styles.explanation}>{explanation}</p>
			<div className={styles.date}>
				Taken on: <span>{date.split('-').join('/')}</span>
			</div>
		</div>
	);
};

export default SpaceCard;
