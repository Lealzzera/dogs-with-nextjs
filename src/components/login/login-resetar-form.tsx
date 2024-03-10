"use client";
import styles from "./login-form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React, { useEffect, useState } from "react";
import passwordReset from "@/actions/password-reset";

type LoginResetarFormProps = {
	keyToken: string;
	login: string;
};

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<>
			{pending ? (
				<Button disabled={pending}>Resetando...</Button>
			) : (
				<Button>Resetar Senha</Button>
			)}
		</>
	);
}

export default function LoginResetarForm({
	keyToken,
	login,
}: LoginResetarFormProps) {
	const [state, action] = useFormState(passwordReset, {
		ok: false,
		error: "",
		data: null,
	});

	return (
		<>
			<form action={action} className={styles.form}>
				<Input type='password' label='Nova Senha' name='password' />
				<input type='hidden' name='login' value={login} />
				<input type='hidden' name='key' value={keyToken} />
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	);
}
