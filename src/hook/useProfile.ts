/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosWithAuthUser } from "@/api/intreceptors";
import { getAccessToken } from "@/services/auth/auth.helper"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"


const getData = async () => {
    return await axiosWithAuthUser.get('/ui/users/me');
}

export default function useProfile() {
    if (!getAccessToken()) return null

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getData,
        select: data => data.data,
    })

    if (isLoading) return null;
    if (error) return null;

    return user?.user
}