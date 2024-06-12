"use server";

import { signIn } from "./authOptions";
import { redirect } from "next/navigation";

export const login = async (access: string, refresh: string) => {
    try {
        await signIn("credentials", {
            redirect: true,
            access: access,
            refresh: refresh,
        })
    } catch (error: any) {
        if (error?.type === "CredentialsSignin") {
            return { error: "Invalid credentials!" };
        }

        return { error: "Something went wrong!" };
    } finally {
        redirect("/");
    }
}