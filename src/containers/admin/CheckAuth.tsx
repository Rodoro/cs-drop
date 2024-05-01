'use server'
import React from 'react'
import { cookies } from 'next/headers'
import GoHome from './GoHome'

type CheckAuthProps = {
    children?: React.ReactNode
  }

const CheckAuth: React.FC<CheckAuthProps> = ({ children }) => {
    let token = cookies().get('Authorization')
    return (
        <div>
            <div>
                {!token ? (
                    <GoHome />
                ) : (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CheckAuth
