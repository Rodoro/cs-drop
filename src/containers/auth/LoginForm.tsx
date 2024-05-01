"use client"
import FormButton from '@/components/interface/FormButton'
import FormInput from '@/components/interface/FormInput'
import React from 'react'
import { login } from '@/utils/helperApi'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res)
    if (res?.url) {
      router.replace('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Почта'
        type='text'
        placeholder='email'
        required
      />
      <FormInput
        label='Пароль'
        type='password'
        placeholder='password'
        required
      />
      <FormButton type="submit">Войти</FormButton>
    </form>
  )
}

export default LoginForm
