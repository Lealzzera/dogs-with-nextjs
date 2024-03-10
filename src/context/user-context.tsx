"use client";

import userGet from "@/actions/user-get";
import { ReactNode, createContext, useEffect, useState } from "react";

type IUserContext = {
	id?: number;
	username?: string;
	nome?: string;
	email?: string;
};
export const UserContext = createContext<IUserContext | null>(null);

export function UserContextProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<null | IUserContext>(null);
	useEffect(() => {
		const getUsuario = async () => {
			const { data } = await userGet();
			setData(data);
		};
		getUsuario();
	}, []);
	return (
		<UserContext.Provider
			value={{
				id: data?.id,
				username: data?.username,
				nome: data?.nome,
				email: data?.email,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
