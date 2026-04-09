import { PenLine } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { UseAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

const Signup = () => {
  const { registerUser } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const handleInput = (data) => {
    const filterdData = { name: data.name, email: data.email, password: data.password, role: data.role };
    registerUser(filterdData);
  };
  return (
  
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div data-slot="card" className="bg-card text-card-foreground form-card">
        <div data-slot="card-header" className="mx-auto text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <PenLine size={28} className="text-white dark:text-black" />
          </div>
          <div data-slot="card-title" className="font-semibold text-2xl">
            Create an Account
          </div>
          <div className="text-muted-foreground text-sm">Join Inkwell to start reading or writing</div>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleInput)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Sharat Katwa"
              className="input shadow"
              name="name"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="sharat@gmail.com"
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
              placeholder="Create a Password"
              className="input shadow"
              name="password"
              autoComplete="current-password"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "confirmPassword is required",
                validate: (value) => value === getValues("password") || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm your password"
              className="input shadow"
              name="confirmPassword"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="input-label" htmlFor="name">
              Account Type
            </label>
            <div className="grid grid-cols-2 gap-6">
              <label className="cursor-pointer">
                <input
                  {...register("role")}
                  type="radio"
                  name="role"
                  defaultChecked
                  value="reader"
                  className="peer hidden"
                />

                <div
                  value="reader"
                  className="peer-checked:ring-3 peer-checked:ring-primary peer-checked:bg-primary/20 py-4 flex flex-col border border-gray-500/20 rounded-lg shadow items-center justify-center hover:border-primary transition-all"
                >
                  <p className="text-xl font-semibold">Reader</p>
                  <p className="text-sm text-gray-500">Read articles</p>
                </div>
              </label>

              <label className="cursor-pointer">
                <input {...register("role")} type="radio" name="role" value="author" className="peer hidden" />

                <div
                  value="author"
                  className="peer-checked:ring-3   peer-checked:ring-primary peer-checked:bg-primary/20  py-4 flex flex-col border border-gray-500/20 rounded-lg shadow items-center justify-center hover:border-primary transition-all"
                >
                  <p className="text-xl font-semibold">Author</p>
                  <p className="text-sm text-gray-500">Write & Publish</p>
                </div>
              </label>
            </div>
          </div>
          <p className="text-red-500">
            {errors.name && <span>{errors.name.message}, </span>}
            {errors.email && <span>{errors.email.message}, </span>}
            {errors.password && <span>{errors.password.message}, </span>}
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </p>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>
        <p>
          don't have an account?{" "}
          <NavLink className="text-primary" to={"/auth/login"}>
            login here
          </NavLink>
        </p>
      </div>
    </main>
  
    
  );
};

export default Signup;
