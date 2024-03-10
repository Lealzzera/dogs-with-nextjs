import LoginForm from "@/components/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login | Dogs",
	description: "Faça o seu login para acessar sua conta.",
};

export default async function LoginPage() {
	return (
		<section>
			<h1 className='title animeLeft'>Login</h1>
			<LoginForm />
		</section>
	);
}
