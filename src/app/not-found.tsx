import Link from "next/link";

export default function NotFound() {
	return (
		<section className='container'>
			<h1 className='title'>Página não encontrada</h1>
			<Link
				style={{ marginTop: "1rem", display: "inline-block" }}
				className='button'
				href={"/"}
			>
				Volte para a home
			</Link>
		</section>
	);
}
