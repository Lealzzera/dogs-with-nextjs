"use client";
import styles from "./login-form.module.css";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "@/context/user-context";

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<>
			{pending ? (
				<Button disabled={pending}>Carregando...</Button>
			) : (
				<Button>Entrar</Button>
			)}
		</>
	);
}

export default function LoginForm() {
	const context = useContext(UserContext);
	const [state, action] = useFormState(login, {
		ok: false,
		error: "",
		data: null,
	});

	React.useEffect(() => {
		if (state.ok) {
			window.location.href = "/";
		}
	}, [state.ok]);
	return (
		<>
			{context?.email}
			<form action={action} className={styles.form}>
				<Input type='text' label='Usuário' name='username' />
				<Input type='password' label='Senha' name='password' />
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
			<Link className={styles.perdeu} href='/login/perdeu'>
				Perdeu a senha?
			</Link>
			<div className={styles.cadastro}>
				<h2 className={styles.subtitle}>Cadastre-se</h2>
				<p>Ainda não possui conta? Cadastre-se no site.</p>
				<Link className='button' href='/login/criar'>
					Cadastro.
				</Link>
			</div>
		</>
	);
}
