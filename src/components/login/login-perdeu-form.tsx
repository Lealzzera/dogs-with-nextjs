"use client";
import styles from "./login-form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React, { useEffect, useState } from "react";
import passwordLost from "@/actions/password-lost";

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<>
			{pending ? (
				<Button disabled={pending}>Enviando...</Button>
			) : (
				<Button>Enviar E-mail</Button>
			)}
		</>
	);
}

export default function LoginPerdeuForm() {
	const [state, action] = useFormState(passwordLost, {
		ok: false,
		error: "",
		data: null,
	});

	const [url, setUrl] = useState("");

	useEffect(() => {
		setUrl(window.location.href.replace("perdeu", "resetar"));
	}, []);
	return (
		<>
			<form action={action} className={styles.form}>
				<Input type='text' label='E-mail / Usuário' name='login' />
				<input type='hidden' name='url' value={url} />
				{state.ok && (
					<p style={{ color: "#4c1", marginBottom: "10px" }}>
						Email enviado com sucesso.
					</p>
				)}
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	);
}
