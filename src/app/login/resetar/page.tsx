import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

type ResetarSearchParams = {
	searchParams: {
		key: string;
		login: string;
	};
};

export const metadata: Metadata = {
	title: "Resete sua senha",
	description: "Faça a troca da sua senha para acessar sua conta Dogs.",
};

export default async function ResetarPage({
	searchParams,
}: ResetarSearchParams) {
	return (
		<div className='animeLeft'>
			<h1 className='title'>Resete sua senha</h1>
			<LoginResetarForm
				keyToken={searchParams.key}
				login={searchParams.login}
			/>
		</div>
	);
}
