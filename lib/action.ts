"use server";

import { signIn } from "@/auth";

export async function authAction() {
	await signIn("github");
}
