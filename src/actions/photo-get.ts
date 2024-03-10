"use server";

import { PHOTO_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "./photos-get";

export type Comment = {
	comment_ID: string;
	comment_post_ID: string;
	comment_author: string;
	comment_content: string;
};

export type PhotoData = {
	photo: Photo;
	comments: Comment[];
};

export default async function photoGet(idPhoto: string) {
	try {
		const { url } = PHOTO_GET(idPhoto);
		const response = await fetch(url, {
			next: {
				revalidate: 60,
				tags: ["photos", "comment"],
			},
		});
		const data = (await response.json()) as PhotoData;
		if (!response.ok) throw new Error("Não foi possível carregar a foto.");
		return { data, ok: true, error: "" };
	} catch (error) {
		return apiError(error);
	}
}
