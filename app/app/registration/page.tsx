'use client'

import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, UserPlus } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'sonner';

const schema = z.object({
  first_name: z.string()
    .min(5, { message: "First name must be at least 5 characters" })
    .max(15, { message: "First name must be at most 15 characters" }),
  last_name: z.string()
    .min(5, { message: "Last name must be at least 5 characters" })
    .max(15, { message: "Last name must be at most 15 characters" }),
  username: z.string()
    .min(5, { message: "Username must be at least 5 characters" })
    .max(15, { message: "Username must be at most 15 characters" }),
  email: z.string()
    .email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(15, { message: "Password must be at most 15 characters" }),
  confirm_password: z.string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(15, { message: "Password must be at most 15 characters" }),
  terms: z.boolean()
    .refine(val => val === true, { message: "You must accept the terms" }),
})

.refine((data) => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"], // <-- error will show up under confirm_password
});


type FormData = z.infer<typeof schema>;

export default function Registration() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await axios.post('/api/register', {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        password: data.password
      });
       if (res.status === 200) toast.success('Registration successful! Please log in.');
      if (res.status === 201) router.push('/login');
    } catch (error: any) {

      if (axios.isAxiosError(error) && error.response) {

        if (error.response.status === 409) {
          toast.error('Username or email already in use.');
        } else if (error.response.status === 400) {
          toast.error('User already exists. Please log in.');
        } else if (error.response.status === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error('Registration failed. Please try again.');
        }
      } else {
        toast.error('Network error. Please check your connection.');
      }


    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
        <div className="text-center mb-6">
          <div className="mx-auto bg-gray-700 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-3">
            <UserPlus className="text-indigo-400 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Create Account</h1>
          <p className="text-gray-300 text-sm">Join us today! Please fill in your details</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('first_name')}
                  className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="First name"
                />
                {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('last_name')}
                  className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Last name"
                />
                {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('username')}
                className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Choose a username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('email')}
                autoComplete="email"
                className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                className="block w-full pl-10 pr-10 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-200" /> :
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-200" />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('confirm_password')}
                type={showConformPassword ? 'text' : 'password'}
                autoComplete="new-password"
                className="block w-full pl-10 pr-10 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConformPassword(!showConformPassword)}
                className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConformPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-200" /> :
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-200" />}
              </button>
              {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password.message}</p>}
            </div>
          </div>

          <div className="flex items-center">
            <input
              {...register('terms')}
              type="checkbox"
              className="cursor-pointer h-4 w-4 text-indigo-400 focus:ring-indigo-500 border-gray-600 rounded"
            />
            <label className="ml-2 text-sm text-gray-200">
              I agree to the <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}

          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition duration-300"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-300 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
