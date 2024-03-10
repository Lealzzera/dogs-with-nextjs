"use client";

import React, { useEffect, useState } from "react";

import styles from "./conta-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import FeedIcon from "@/icons/feed-icon";
import EstatisticasIcon from "@/icons/estatiticas-icon";
import AdicionarIcon from "@/icons/adicionar-icon";
import SairIcon from "@/icons/sair-icon";
import Link from "next/link";
import logout from "@/actions/logout";

function getTitle(pathname: string) {
	switch (pathname) {
		case "/conta/postar":
			return "Publique uma foto";
		case "/conta/estatisticas":
			return "Estatísticas";
		default:
			return "Minha Conta";
	}
}

export default function ContaHeader() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const mobile = useMedia("(max-width: 40rem)");
	const pathname = usePathname();

	useEffect(() => {
		setMobileMenu(false);
	}, [pathname]);

	const handleLogout = async () => {
		await logout();
		window.location.href = "/login";
	};

	return (
		<header className={styles.header}>
			<h1 className='title'>{getTitle(pathname)}</h1>
			{mobile && (
				<button
					className={`${styles.mobileButton} ${
						mobileMenu && styles.mobileButtonActive
					}`}
					aria-label='Menu'
					onClick={() => setMobileMenu(!mobileMenu)}
				></button>
			)}
			<nav
				className={`${mobile ? styles.navMobile : styles.nav} ${
					mobileMenu && styles.navMobileActive
				}`}
			>
				<Link className={pathname === "/conta" ? "active" : ""} href='/conta'>
					<FeedIcon />
					{mobile && "Minhas Fotos"}
				</Link>
				<Link
					className={pathname === "/conta/estatisticas" ? "active" : ""}
					href='/conta/estatisticas'
				>
					<EstatisticasIcon />
					{mobile && "Estatísticas"}
				</Link>
				<Link
					className={pathname === "/conta/postar" ? "active" : ""}
					href='/conta/postar'
				>
					<AdicionarIcon />
					{mobile && "Adicionar Foto"}
				</Link>
				<button onClick={handleLogout}>
					<SairIcon />
					{mobile && "Sair"}
				</button>
			</nav>
		</header>
	);
}
