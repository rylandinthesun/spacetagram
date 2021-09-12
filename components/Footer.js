import { FaArrowUp } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Footer = () => {
	const goToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<footer className={styles.footer}>
			<div>Made By</div>
			<a href="https://rylandoehlers.com" target="_blank" rel="noopener noreferrer">
				Ryland Oehlers
			</a>
			<button onClick={() => goToTop()} className={`${styles.backTopBtn} ${styles.likeBtn}`}>
				<FaArrowUp />
			</button>
		</footer>
	);
};

export default Footer;
