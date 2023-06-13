import React from 'react'
import Head from 'next/head'
import { MdEditSquare } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import Link from 'next/link';

const Table = (): JSX.Element  => {
  return (
    <>

<Head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> 
{/* <title>Table</title> */}

</Head>

      <div className="container mt-5">

  
<Link href="/" className="btn btn-dark mb-3">Add New</Link>

<table className="table table-hover text-center">
  <thead className="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
      <tr>
        <td>1</td>
        <td>Muhammad</td>
        <td>Umer</td>
        <td>umer@mail.com</td>
        <td>Male</td>
        <td>
          {/* <a href="#" className="link-dark"><i className="fa-solid fa-trash fs-5"></i></a> */}


          <a href="#" className="link-dark"><AiFillDelete style={{color:'red', fontSize:'1.8rem'}} /></a>
          <a href="#" className="link-dark"><MdEditSquare style={{color:'green', fontSize:'1.8rem'}}/></a>

        </td>
      </tr>
   
  </tbody>
</table>
</div>
    </>
  )
}

export default Table
