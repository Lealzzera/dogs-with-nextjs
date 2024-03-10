type UserPageParams = {
	params: {
		user: string;
	};
};

export default async function UserPage({ params }: UserPageParams) {
	return (
		<main>
			<h1>Usuário: {params.user}</h1>
		</main>
	);
}
