"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type User = {
	id: number;
	username: string;
	nome: string;
	email: string;
};

export default async function userGet() {
	const userToken = cookies().get("token");
	try {
		const { url } = USER_GET(userToken?.value);
		const response = await fetch(url, {
			headers: {
				Authorization: "Bearer " + userToken?.value,
			},
			next: {
				revalidate: 60,
			},
		});
		const data = (await response.json()) as User;
		return { data, ok: true, error: "" };
	} catch (error: unknown) {
		return apiError(error);
	}
}
