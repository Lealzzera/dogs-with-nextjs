"use server";

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { redirect } from "next/navigation";

export default async function passwordReset(
	state: { ok: boolean; error: string; data: null },
	formData: FormData
) {
	const login = formData.get("login") as string | null;
	const password = formData.get("password") as string | null;
	const key = formData.get("key") as string | null;

	try {
		if (!password) throw new Error("Preencha uma senha válida.");
		if (password.length < 6)
			throw new Error("A sua nova senha deve conter 6 ou mais caracteres.");
		const { url } = PASSWORD_RESET();
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				login,
				password,
				key,
			}),
		});
		if (!response.ok) throw new Error("Não foi possível alterar a sua senha.");
	} catch (error: unknown) {
		return apiError(error);
	}
	redirect("/login");
}
