"use client"
import React, {ChangeEvent, useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
interface Data{
   fname: String;
   lname: String;
   email: String;
   gender: String;
}

const Form: React.FC = () => {

   const [formData, setFormData] = useState<Data>({
      fname: "",
      lname: '',
      email: '',
      gender: 'male',

   })

   const getFormData = (e: ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault()
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
      console.log(formData)
   }

   const submitHandler = async(e: React.ChangeEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const {fname, lname, email, gender} = formData
      if(!(fname || lname || email || gender)){
         return alert("Complete all field")
      }

      else{
         try {
            await fetch('/api/addUser', {
               method: "POST",
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({fname, lname, email, gender})
            })

            window.location.href = '/table';
         } catch (error) {
            console.error("Error adding student:", error);
         }
      }

   }

  return (
    <>


{/* <Link href="#" className="btn btn-secondary mb-3">API ROUTE</Link> */}

{/* <div className="container">
      <div className="text-center mb-4">
<Link href="/table" className="btn btn-dark mb-3">Display user</Link>
         
         <h3>Add New User</h3>
         <p className="text-muted">Complete the form below to add a new user</p>
      </div>
      <div className="container d-flex justify-content-center">
         <form onSubmit={submitHandler} method="post" style={{width:'50vw', minWidth:'300px'}} >
            <div className="row mb-3">
               <div className="col">
                  <label className="form-label">First Name:</label>
                  <input onChange={getFormData} type="text" className="form-control" value={formData.fname.toString()} name="fname" placeholder="Muhammad"/>
               </div>

               <div className="col">
                  <label className="form-label">Last Name:</label>
                  <input onChange={getFormData} type="text" className="form-control" value={formData.lname.toString()} name="lname" placeholder="Umer"/>
               </div>
            </div>

            <div className="mb-3">
               <label className="form-label">Email:</label>
               <input onChange={getFormData} type="email" className="form-control" value={formData.email.toString()} name="email" placeholder="name@example.com"/>
            </div>

            <div className="form-group mb-3">
               <label>Gender:</label>
               &nbsp;

               
               <input onChange={getFormData} type="radio"  name="gender" value="male" defaultChecked />
               <label  className="form-input-label">Male</label>
               &nbsp;
               
               <input onChange={getFormData} type="radio"  name="gender" value="female" />
               <label  className="form-input-label">Female</label>
            </div>

            <div>
               <button type="submit" className="btn btn-success btn-md" name="submit">Save</button> 
            </div>
         </form>
      </div>
   </div> */}


<Head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"  rel="stylesheet" />
</Head>


<Link href="#" className="my-12">
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">API ROUTE
    </button>
</Link>

<form className='my-6 w-[80vw]'>
   <div className='container border-2 mx-4'>
        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div className='mb-4'>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
         



    <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
   
   


    <div className="flex items-center mb-4 ">
    <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label htmlFor="country-option-1" className="pr-4  block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      United States
    </label>
  
  
    <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Germany
    </label>
  </div>






    <button type="submit" className="text-black bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>


</form>










<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>

    </>

  )
}

export default Form