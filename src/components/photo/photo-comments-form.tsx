import { useFormStatus, useFormState } from "react-dom";
import styles from "./photo-comments-form.module.css";
import EnviarIcon from "@/icons/enviar-icon";
import ErrorMessage from "../helper/error-message";
import commentPost from "@/actions/comment-post";
import { useEffect, useState } from "react";

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<button type='submit' className={styles.button} disabled={pending}>
			<EnviarIcon />
		</button>
	);
}

export default function PhotoCommentsForm({
	single,
	id,
	setComments,
}: {
	single: boolean;
	id: number;
	setComments: any;
}) {
	const [state, action] = useFormState(commentPost, {
		ok: false,
		data: null,
		error: "",
	});

	useEffect(() => {
		if (state.ok && state.data) {
			setComments((comments: any) => [...comments, state.data]);
			setComment("");
		}
	}, [state, setComments]);

	const [comment, setComment] = useState("");
	return (
		<form
			action={action}
			className={`${styles.form} ${single ? styles.single : ""}`}
		>
			<input type='hidden' name='id' id='id' value={id} />
			<textarea
				className={styles.textarea}
				name='comment'
				id='comment'
				value={comment}
				onChange={({ target }) => setComment(target.value)}
				placeholder='Digite o seu comentário'
			></textarea>
			<FormButton />
			<ErrorMessage error={state.error} />
		</form>
	);
}
