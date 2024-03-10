import Image from "next/image";
import styles from "./Footer.module.css";

export default async function Footer() {
	return (
		<footer className={styles.footer}>
			<Image
				src={"/Assets/dogs-footer.svg"}
				alt='Dogs'
				width={28}
				height={22}
			/>
			<p>Dogs. Alguns direitos reservados.</p>
		</footer>
	);
}
