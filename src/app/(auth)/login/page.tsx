"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ILogForm } from '@/types/auth.types'
import { authService } from '@/services/auth/auth.services'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
    const [error, setError] = useState<string | undefined>()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ILogForm>({
        mode: 'onChange'
    })
    const { push } = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: ILogForm) =>
            authService.loginAdmin(data),
        onSuccess() {
            reset()
            push('/')
        },
        onError(error: any) {
            console.log(error)
            setError(error.response.data.message)
        }
    })

    const onSubmit: SubmitHandler<ILogForm> = (data) => {
        mutate(data)
    }

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     const email = e.target[0].value;
    //     const password = e.target[1].value;

    //     const res = await signIn("credentials", {
    //         redirect: false,
    //         email,
    //         password,
    //     });
    //     if (res?.status !== 200) {
    //         setStatus('Ошибка авторизации: ' + res?.status)
    //         setMessage('Проверте коректность данных в форме')
    //         setOpen(true)
    //         return
    //     }
    //     if (res?.url) {
    //         router.replace('/')
    //     }
    // }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="w-full max-w-xs mt-36">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#272B35] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 flex flex-row text-2xl items-center justify-center">
                        Sign in
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            type="text"
                            placeholder="email"
                            {...register('email', {
                                required: 'Email is required!'
                            })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            type="password"
                            autoComplete="password"
                            placeholder="password"
                            {...register('password', {
                                required: 'Password is required!',
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                                maxLength: {
                                    value: 32,
                                    message: "Password must be no more than 32 characters",
                                },
                            })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2">
                            Sign In
                        </button>
                    </div>
                    {(error || errors) && <div className="text-red-500 test-sm font-inter">{error}{errors.email?.message}{errors.password?.message}</div>}
                </form>
            </div>
        </div>
    )
}

export default LoginPage