"use client"
import React, {ChangeEvent, useState} from 'react'
import Link from 'next/link'
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

{/* <Link href="../../pages/dummy/test" className="btn btn-secondary mb-3">API ROUTE</Link> */}
<Link href="#" className="btn btn-secondary mb-3">API ROUTE</Link>

<div className="container">
      <div className="text-center mb-4">
<Link href="#" className="btn btn-dark mb-3">Display user</Link>
         
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
               {/* checked={formData.gender === 'Female'} */}
               
               <input onChange={getFormData} type="radio"  name="gender" value="female" />
               <label  className="form-input-label">Female</label>
            </div>

            <div>
               <button type="submit" className="btn btn-success btn-md" name="submit">Save</button> 
            </div>
         </form>
      </div>
   </div>


    </>

  )
}

export default Form