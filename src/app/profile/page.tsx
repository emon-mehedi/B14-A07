'use client'
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowBendDownLeft } from 'react-icons/pi';
import { toast } from 'react-toastify';

const Profile = () => {
  const { data: session } = useSession();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
     await updateUser({
      name: data.name
    })
    toast.success("নাম সফলভাবে হালনাগাদ হয়েছে")
  }
  return (
    <div className='space-y-5'>
      <div>
        <h1 className='text-4xl font-bold'>আমার প্রফাইল</h1>
        <p>আপনার একাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      <div className='flex flex-row justify-between items-center bg-white rounded-2xl p-4'>
        <div className='flex flex-row justify-center items-center gap-2'>
          {session?.user.image
            ? <Image src={session.user.image} alt={session.user.name || "User"} width={12} height={12} className="w-12 h-12 rounded-xl object-cover" />
            : <div className="w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center font-bold">
              {session?.user.name?.charAt(0).toUpperCase() || "?"}
            </div>
          }
          <div>
            <h2 className='text-2xl'>{session?.user.name}</h2>
            <p>{session?.user.email}</p>
          </div>
        </div>
        <Link href={'/signIn'} onClick={() => {signOut(); toast.success("সাইন আউট সফলভাবে সম্পন্ন হয়েছে")}} className='text-red-600 border border-red-600 rounded-xl flex flex-row justify-center items-center p-2'>
          <PiArrowBendDownLeft /> <span>সাইন আউট</span>
        </Link>
      </div>

      <div>
        <Form className="flex w-md md:w-xl lg:w-2xl flex-col gap-4 bg-white p-5 rounded-2xl" onSubmit={onSubmit}>
          <h3 className='text-lg font-bold'>তথ্য</h3>
          <TextField isRequired name="name">
            <Label>নাম</Label>
            <Input className='w-full' />
            <FieldError />
          </TextField>
          <Button type="submit" className='bg-green-600 rounded-xl w-full'>আপডেট</Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;