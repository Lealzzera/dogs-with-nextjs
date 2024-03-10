"use client";
import styles from "./login-form.module.css";
import userPost from "@/actions/user-post";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<>
			{pending ? (
				<Button disabled={pending}>Carregando...</Button>
			) : (
				<Button>Cadastrar</Button>
			)}
		</>
	);
}

export default function LoginCriarForm() {
	const [state, action] = useFormState(userPost, {
		ok: false,
		error: "",
		data: null,
	});

	React.useEffect(() => {
		if (state.ok) {
			window.location.href = "/conta";
		}
	}, [state.ok]);
	return (
		<>
			<form action={action} className={styles.form}>
				<Input type='text' label='Usuário' name='username' />
				<Input type='email' label='E-mail' name='email' />
				<Input type='password' label='Senha' name='password' />
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	);
}
