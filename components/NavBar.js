import { IoMdPlanet } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link href="/">
						<a>
							<IoMdPlanet />
						</a>
					</Link>
				</li>

				<Link href="/likes">
					<button className={styles.likeBtn}>
						<FaHeart />
					</button>
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;
