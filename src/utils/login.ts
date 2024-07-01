import { saveTokensStorage } from "@/services/auth/auth.helper";
import { useRouter } from "next/navigation";


export const login = async (access: string, refresh: string) => {

    try {
        saveTokensStorage(access, refresh);
        // await signIn("credentials", {
        //     redirect: true,
        //     access: access,
        //     refresh: refresh,
        // })
    } catch (error: any) {
        if (error?.type === "CredentialsSignin") {
            return { error: "Invalid credentials!" };
        }

        return { error: "Something went wrong!" };
    }
}