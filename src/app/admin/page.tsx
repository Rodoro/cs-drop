'use server'
import React from 'react'
import { cookies } from 'next/headers'
import GoHome from '@/containers/admin/GoHome'

const page = () => {
    const token = cookies().get('Authorization')
    return (
        <div>
            dfd
        </div>
    )
}

export default page
