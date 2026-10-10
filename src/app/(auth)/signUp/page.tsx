"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { toast } from "react-toastify";
import { signUp, signIn } from '@/lib/auth-client'
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUp() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log("data before submitting", data)

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: '/'
    })
    if (resData) {
      console.log("after submitting", resData);
      redirect("/");
    }
    if (error) {
      console.log(error);
      toast.error(error.message)
    } else {
      toast.success("সাইন আপ সফলভাবে সম্পন্ন হয়েছে")
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });
    console.log(data)
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">একাউন্ট তৈরি করুন</h2>
        <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
      </div>
      <Form className="flex w-96 flex-col gap-4 bg-white p-5 rounded-2xl" onSubmit={onSubmit}>
        {/* Name */}
        <TextField isRequired name="name" >
          <Label>নাম</Label>
          <Input placeholder="যেমন: রহিম উদ্দীন" className='w-full' />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input placeholder="john@example.com" className='w-full' />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>
          <Input placeholder="কমপক্ষে ৮ অক্ষর" className='w-full' />
          <Description>
            At least 8 characters, with 1 uppercase letter and 1 number.
          </Description>
          <FieldError />
        </TextField>

        {/* Confirm Password */}
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
          validate={(value) => {
            const form = document.querySelector("form");
            const password =
              form ? new FormData(form).get("password")?.toString() ?? "" : "";

            if (value !== password) {
              return "Passwords do not match";
            }

            return null;
          }}
        >
          <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
          <Input placeholder="আবার লিখুন" className='w-full' />
          <FieldError />
        </TextField>

        <Button type="submit" className='bg-green-600 rounded-xl w-full'>একাউন্ট তৈরি করুন</Button>

        <div className="flex w-full flex-col">
          <div className="divider my-0">অথবা</div>
        </div>

        <div className="flex flex-row justify-between items-center gap-2">
          <Button onClick={()=>handleGoogleSignIn()} className="flex-1 rounded-xl bg-white text-black border border-black py-5">
            <FcGoogle />
            <span>Google দিয়ে <br></br>চালিয়ে যান</span>
          </Button>
          <Button className="flex-1 rounded-xl bg-white text-black border border-black py-5">
            <FaGithub />
            <span>Github দিয়ে<br></br> চালিয়ে যান</span>
          </Button>
        </div>

        <div className="text-center">
          একাউন্ট আছে? <Link href={'/signIn'} className="underline text-green-600">সাইন ইন করুন</Link>
        </div>
      </Form>
      <Link href={'/'}><div className="flex flex-row items-center"><HiOutlineArrowLongLeft /> <span>হোম পেজে ফিরে যান</span></div></Link>


    </div>
  );
}