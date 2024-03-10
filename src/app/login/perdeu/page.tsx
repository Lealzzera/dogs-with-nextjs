import LoginPerdeuForm from "@/components/login/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Perdeu sua senha?",
	description: "Faça a recuperação da sua conta Dogs.",
};

export default async function PerdeuPage() {
	return (
		<div className='animeLeft'>
			<h1 className='title'>Perdeu</h1>
			<LoginPerdeuForm />
		</div>
	);
}
