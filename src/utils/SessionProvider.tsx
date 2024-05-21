"use client";
import React from "react";
import { SessionProvider, useSession } from "next-auth/react";

const AuthProvider = ({ children }: any) => {

    console.log(12)
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;