import React from 'react'
import { UseAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { PenLine } from 'lucide-react';
import { NavLink } from 'react-router';
const Login = () => {
  const {login} = UseAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleInput = (data) => {
    login(data)
  };
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div data-slot="card" className="bg-card text-card-foreground form-card">
        <div data-slot="card-header" className="mx-auto text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <PenLine size={28} className="text-white dark:text-black" />
          </div>
          <div data-slot="card-title" className="font-semibold text-2xl">
            Welocome Back
          </div>
          <div className="text-muted-foreground text-sm">Sign in to your account to continue</div>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleInput)}>
         
          <div className=" flex flex-col gap-2">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="sharat@example.com"
              className="input shadow"
              name="email"
              autoComplete="email"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className="input shadow"
              name="password"
              autoComplete="current-password"
            />
          </div>
          
          <p className="text-red-500">
            {errors.name && <span>{errors.name.message}, </span>}
            {errors.email && <span>{errors.email.message}, </span>}
            {errors.password && <span>{errors.password.message}, </span>}
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </p>

          <button type="submit" className="btn-primary">
            Sign in
          </button>
        </form>
        <p>don't have an account? <NavLink className='text-primary' to={'/auth/signup'}>register here</NavLink></p>
      </div>
    </main>
  );
}

export default Login