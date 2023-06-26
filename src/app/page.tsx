"use client"
import Form from '@/components/Form'
import Hello from '@/components/Hello'
import Head from 'next/head'
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <>
       {/* <Head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"  rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>
    </Head> */}

<div className="flex items-center justify-center h-screen">
        <Alert color="info">
          <span>
            <span className="font-medium">Flowbite </span>
            with NextJS using Tailwind CSS
          </span>
        </Alert>
      </div>

    <Hello/>
    <Form/>


   

    </>
  )
}
