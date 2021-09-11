import { IoMdPlanet } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const NavBar = ({ spaceFavs, showLikes, likes }) => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<IoMdPlanet />
				</li>
				{spaceFavs.length >= 1 ? (
					<button onClick={() => showLikes()} className={styles.likeBtn}>
						{likes ? 'Home' : <FaHeart />}
					</button>
				) : null}
			</ul>
		</nav>
	);
};

export default NavBar;
