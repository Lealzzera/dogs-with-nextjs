"use server";

import { PHOTOS_GET, STATS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export type StatsData = {
	id: number;
	title: string;
	acessos: string;
};
export default async function statsGet() {
	try {
		const token = cookies().get("token")?.value;
		if (!token) throw new Error("Acesso negado");
		const { url } = STATS_GET();
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			next: {
				revalidate: 60,
			},
		});
		const data = (await response.json()) as StatsData[];
		if (!response.ok) throw new Error("Erro ao buscar os dados.");
		return { data, ok: true, error: "" };
	} catch (error) {
		return apiError(error);
	}
}
