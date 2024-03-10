"use client";
import styles from "./conta-photo-post.module.css";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "@/components/helper/error-message";
import React from "react";
import photoPost from "@/actions/photo-post";

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<>
			{pending ? (
				<Button disabled={pending}>Enviando...</Button>
			) : (
				<Button>Enviar</Button>
			)}
		</>
	);
}

export default function ContaPhotoPost() {
	const [state, action] = useFormState(photoPost, {
		ok: false,
		error: "",
		data: null,
	});

	const [img, setImg] = React.useState("");
	function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
		if (target.files) {
			setImg(URL.createObjectURL(target.files[0]));
		}
	}

	return (
		<>
			<section className={`${styles.photoPost} animeLeft`}>
				<form action={action} className={styles.form}>
					<Input type='text' label='Nome' name='nome' />
					<Input type='number' label='Peso' name='peso' />
					<Input type='number' label='Idade' name='idade' />
					<input
						onChange={handleImageChange}
						type='file'
						name='img'
						id='img'
						className={styles.file}
					/>
					<ErrorMessage error={state.error} />
					<FormButton />
				</form>
				<div>
					<div
						className={styles.preview}
						style={{ backgroundImage: `url(${img})` }}
					></div>
				</div>
			</section>
		</>
	);
}
