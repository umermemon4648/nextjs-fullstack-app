"use client"
import React, {ChangeEvent, useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useRouter  } from 'next/navigation'
interface Data{
   fname: String;
   lname: String;
   email: String;
   gender: String;
}

const Form: React.FC = () => {
   const router = useRouter();
   const [formData, setFormData] = useState<Data>({
      fname: "",
      lname: '',
      email: '',
      gender: '',

   })
console.log(formData)
   const getFormData = (e: ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
      console.log(formData)
   }

   const submitHandler = async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const {fname, lname, email, gender} = formData
      if(!(fname || lname || email || gender)){
         return alert("Complete all field")
      }

      else{
         try {
            await fetch('http://localhost:3000/api/newUser', {
               method: "POST",
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({fname, lname, email, gender})
            })
            router.push('/table');

            // window.location.href = '/table';
         } catch (error) {
            console.error("Error adding student:", error);
         }
      }

   }

   // useEffect(()=>{
   //    // submitHandler()
   // },[])
  
  
   return (
    <>

<Head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"  rel="stylesheet" />
</Head>


<Link href="/table" className="my-12">
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Display User
    </button>
</Link>

<form onSubmit={submitHandler} className='my-6 w-[80vw]' method='POST'>
   <div className='container border-2 mx-4'>
        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input onChange={getFormData} value={formData.fname.toString()} name="fname" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className='mb-4'>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input onChange={getFormData} value={formData.lname.toString()} name="lname" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
         



    <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input onChange={getFormData} value={formData.email.toString()} name="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
   
   


    <div className="flex items-center mb-4 ">
    <input onChange={getFormData} type="radio" name="gender" value="male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
    <label htmlFor="Male" className="pr-4  block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Male
    </label>
  
  
    <input onChange={getFormData} type="radio" name="gender" value="female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"/>
    <label htmlFor="Female" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Female
    </label>
  </div>






    <button type="submit" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>


</form>


<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>

    </>

  )
}

export default Form