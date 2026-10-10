"use client";

import { signIn } from "@/lib/auth-client";
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

export default function SignIn() {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log("data before submitting", data);
    const {data:resData,error}=await signIn.email({
      email:data.email,
      password:data.password,
      callbackURL:"/"
    })
    if(resData){
      console.log(resData);
    }
    if (error){
      console.log(error);
    }

    toast.success("সাইন ইন সফলভাবে সম্পন্ন হয়েছে")
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">সাইন ইন</h2>
        <p>বিস্তারিত দাম, বাজার তুলনা ও প্রফাইল দেখতে একাউন্ট করুন।</p>
      </div>
      <Form className="flex w-96 flex-col gap-4 bg-white p-5 rounded-2xl" onSubmit={onSubmit}>
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
          <Input placeholder="john@example.com" />
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
          <Input placeholder="কমপক্ষে ৮ অক্ষর" />
          <Description>
            At least 8 characters, with 1 uppercase letter and 1 number.
          </Description>
          <FieldError />
        </TextField>

        <Button type="submit" className='bg-green-600 rounded-xl w-full'>সাইন ইন</Button>
      </Form>
      <Link href={'/'}><div className="flex flex-row items-center"><HiOutlineArrowLongLeft /> <span>হোম পেজে ফিরে যান</span></div></Link>
    </div>
  );
}